import { useContext } from 'react';
import cart from '../assets/img/cart.png'
import { CartContext } from './CartContext';


const CartWidget = () =>{

    const test = useContext(CartContext)
  
    return(
        <>
        <div>
            <img className='img-cart' src={cart} alt='Cart'></img><span></span>
        </div>
        </>
    )
        
}

export default CartWidget;