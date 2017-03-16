import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Test from '../components/Test';
import React from 'react';

const TestContainer = ({str}) => {
  console.log(str);
  return <Test str={str}/>
};

const mapStateToProps = (state) => ({
  str: state.test.val
});

export default connect(mapStateToProps)(TestContainer);