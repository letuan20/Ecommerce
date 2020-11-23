import React from 'react';

import './style.css';

//Button Element
const Button=(props)=>{
    const styles=['authButton','siteButton']
    return (
        <button type="submit"  className={styles.join(' ')}>{props.auth}</button>
    )
}

export default Button;