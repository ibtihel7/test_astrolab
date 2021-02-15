import React, { Component } from 'react';

class WishListItem extends Component {

    render() { 
        const {item}=this.props
        return ( 
            <div className='wishlist-item-container'>
            <h2>Name : {item.name}</h2>
         
            
            </div>
         );
    }
}

 
export default (WishListItem);