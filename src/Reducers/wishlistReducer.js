var wishlists=[
    {   _id:'1',
        name:'Wishlist 1',
       
    },
    {   _id:'2',
        name:'Wishlist 2',
       
    }
]

const wishlistReducer=(state=wishlists,action)=>
{
  switch(action.type)
  {
      case 'ADD_WISHLIST' :
      return (
          state.concat(action.newwishlist)
      )

      case 'EDIT_WISHLIST':
      return (
          state.map(el=>el._id===action.editwishlist._id? el=action.editwishlist:el)
      )
      
      case 'REMOVE_WISHLIST':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_WISHLISTS':
      return(
          state=action.wishlists
      )
      default :
      return state
  }
}
export default wishlistReducer