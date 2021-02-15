var products=[
    {   _id:'101',
        name:'Product 1',
       
    },
    {   _id:'102',
        name:'Product 2',
       
    }
]

const productsReducer=(state=products,action)=>
{
  switch(action.type)
  {
      case 'ADD_PRODUCT' :
      return (
          state.concat(action.newproduct)
      )

      case 'EDIT_PRODUCT':
      return (
          state.map(el=>el._id===action.editproduct._id? el=action.editproduct:el)
      )
      
      case 'REMOVE_PRODUCT':
      return (
          state.filter(el=>el._id!==action._id)
      )
      case 'UPDATE_PRODUCTS':
      return(
          state=action.products
      )
      default :
      return state
  }
}
export default productsReducer