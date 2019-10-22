import React from 'react';
import { withRouter } from 'react-router-dom'; 

import './menu-item.styles.scss';

// using destructuring here same as props.title
//passing vlues from Directory com
//dinamicly changes values
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) =>(
    //                                               matching the url and add dynamicly links directory 
    <div 
        className={`${size} menu-item`} 
        onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
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
// with router high order function give us access to history props and more
export default withRouter(MenuItem);