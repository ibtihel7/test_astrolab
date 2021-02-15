import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import axios from 'axios'
import WishListItem from './WishListItem'

class WishLists extends Component {
//   componentDidMount=()=>{
//             axios.get('/get-Wish').then((res)=>this.props.updateWishReducer(res.data))
//         }
        
    render() { 
        const {wishlists}= this.props
        
        return ( 
            <section>
            <div className='wish-list-container'>
            
           {
               wishlists.map((el,index)=>
            <WishListItem key={index} item={el}/>
        )
           }
            </div>
            <Link to='/'>
            <button>Home</button>
            </Link>
            </section>
         );
    }
}
const mapStateToProps=(state)=>
{
    return {
        wishlists:state.wishlistReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateWishlistReducer:wishlists=>
        {
            dispatch({
                type:'UPDATE_wishlists',
                wishlists
            })
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(WishLists);