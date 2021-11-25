
// COMPONENTE CON EL CART
import cart from '../src/assets/img/cart.png'



const cartButton=()=>{
   <div>ACA VA MI POPUP</div>
}


const CartWidget = () =>{
    return(
        <img onClick={cartButton} className='img-cart' src={cart} alt='Cart'></img>
    )
}

export default CartWidget;