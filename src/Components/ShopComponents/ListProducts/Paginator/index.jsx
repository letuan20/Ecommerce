import React from 'react';

import './style.css';

const Paginator = props => (
  <div className="paginator">
    {props.children}
  </div>
);

export default Paginator;
