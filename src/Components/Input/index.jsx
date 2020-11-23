import React from 'react';

import   './style.css';

const Input=(props)=>{
    return(
        <div className='groupInputComponent'>
        <label className='textLabelComponent'>{props.label} *</label>
          <input
            type={props.type}
            className={`inputComponent ${
            props.invalid?'validate-form-error': ''
            }`}
            placeholder={props.placeholder}
            name={props.name}
            onBlur={props.onBlur}
            onChange={props.onChange}
            value={props.value}
            />
      </div>
    )
}

export default Input