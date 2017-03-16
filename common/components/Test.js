import React from 'react';
import "isomorphic-fetch";

fetch('http://localhost:3000/api/test')
.then(res => console.log(res.json()));

const Test = ({str}) => (
  <div>
    Test
    <p>{str}</p>
  </div>
);

export default Test;