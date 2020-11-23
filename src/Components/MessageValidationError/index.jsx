import React from 'react';

import './style.css';

const MsgValidationError = (props) => {
  const { messageErr, touchedOop } = props;
  return messageErr && touchedOop ? (
    <span className="error-validate-form">{messageErr}</span>
  ) : (
    <></>
  );
};

export default MsgValidationError;
