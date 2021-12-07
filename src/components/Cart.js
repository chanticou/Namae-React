import { useContext } from 'react'
import { CartContext } from '../components/CartContext'
import { Link } from 'react-router-dom'

//El componente carrito va a tener acceso a cartContext
const Cart = () =>{

    const test = useContext(CartContext)
    console.log(test)


    return(
        <>
    {

        test.cartList.length > 0 ?
       test.cartList.map(item=>
        <div className='productsContainer'>
            <img className='product__img' src={item.imgItem} alt='philadefia' ></img>
            <h3 className='product__title'>{item.nameItem}</h3>
            <h3 className='product__title'>{item.descriptionItem}</h3>  
            <h3 className='product__title'>Cantidad: {item.qtyItems}</h3>
            <h3 className='product__price'>Precio:$ {item.priceItem}</h3>        
        </div>
        )
        :<div>
            <h1>NO HAY PRODUCTOS</h1>
            <button><Link to='/menu'>Voler al menu</Link></button>
        </div>
    }
    </>
    )
}


export default Cart;
// test.cartList.length > 0 ?
// test.cartList.map(item=>
//     {item.nameItem}    
// )
// <button className='detailsButton'><Link to={`/item/${id}`}>Details</Link></button>  