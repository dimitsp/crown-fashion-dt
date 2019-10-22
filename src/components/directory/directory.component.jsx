import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

// this com fills up the menu item
export default class  Directory  extends React.Component {

    constructor(){
        super();
        
        this.state = {

            // arr of obj in homepage
            sections:[{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }
             ]
        }
    }

    render() {
        return (
           
                 //map through sections we are gonne get a section and what we want to render is the nemu item 
                 //we use also here destructuring the section values
                <div className='directory-menu'>
                    {
                        this.state.sections.map( ( { title, imageUrl, id, size } )  => (
                            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                        ))
                    }
                </div>
        )
    }
}
