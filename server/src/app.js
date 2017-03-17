import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import domainMiddleware from 'express-domain-middleware';
import {errorHandler, notFoundHandler} from 'express-api-error-handler';
import config from 'config';
import './bootstrap';
import routes from './routes';
import loadRoutes from './common/loadRoutes';
import logger from './common/logger';

import path from 'path';
import qs from 'qs';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import configureStore from '../../common/store/configureStore';
import App from '../../common/containers/App';
import rootReducer from '../../common/reducers/index';

const app = express();
app.set('port', config.PORT);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(domainMiddleware);


const apiRouter = new express.Router();

loadRoutes(apiRouter, routes);

app.use('/api', apiRouter);

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(handleRender);

function handleRender(req, res) {
  const store = createStore(rootReducer);
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body style="padding: 0; margin: 0;">
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.use(errorHandler({
  log: ({err, req, body}) => {
    logger.error(err, `${body.status} ${req.method} ${req.url}`);
  },
}));

app.use(notFoundHandler({
  log: ({req}) => {
    logger.error(`404 ${req.method} ${req.url}`);
  },
}));

if(!module.parent) {
    app.listen(app.get('port'), () => {
    logger.info(`Express server listening on port ${app.get('port')} in ${process.env.NODE_ENV} mode`);
  });
}

export default app;
