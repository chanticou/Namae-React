
// COMPONENTE CON EL CART
import cart from '../assets/img/cart.png'





const CartWidget = ({ contador }) =>{
    return(
        <>
        <img className='img-cart' src={cart} alt='Cart'></img><span>{contador}</span>
        </>
    )
}

export default CartWidget;