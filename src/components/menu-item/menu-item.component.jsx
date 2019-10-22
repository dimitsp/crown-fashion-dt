import React from 'react';

import './menu-item.styles.scss';

// using destructuring here same as props.title
//passing vlues from Directory com
//dinamicly changes values
const MenuItem = ({ title, imageUrl, size }) =>(
    <div className={`${size} menu-item`} >
        {/* hoverover div */}
            <div className='background-image'  
                style={{
                     backgroundImage:`url(${imageUrl})`
                }}
            />
            <div className="content">
                    <h1 className='title'>{ title.toUpperCase() }</h1>
                    <span className='subtitle'>SHOP NOW</span>
            </div>
    </div>
);

export default MenuItem;