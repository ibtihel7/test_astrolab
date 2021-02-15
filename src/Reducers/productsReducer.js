import img1 from '../Images/step.jpg' 
import img2 from '../Images/nike.jpg' 

var products=[
    {   _id:'101',
        name:'Product 1',
        image: img1,
        price:'200 ',
        currency:'TND',
        description :'Sport product',
        status :'To buy',
        wishlist:' wishlist1'
       
    },
    {   _id:'102',
        name:'Product 2',
        image: img2,
        price:'300 ',
        currency:'TND',
        description :'Sport product',
        status :'Bought',
        wishlist:' wishlist2'

       
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