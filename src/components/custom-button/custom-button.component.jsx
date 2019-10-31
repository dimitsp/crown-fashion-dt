import React from 'react';

import './custom-button.styles.scss';

//customize the google's button
// render this class of Google sign and if this property is true
//if not there will be an empty string and custom button is also always rendered
const CustomButton =({ children, isGoogleSignIn, ...otherProps  }) =>(
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}
    >
        { children }
    </button>
);

export default CustomButton;