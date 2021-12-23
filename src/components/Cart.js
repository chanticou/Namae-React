import { useContext } from 'react'
import { CartContext } from '../components/CartContext'
import { Link } from 'react-router-dom'

//El componente carrito va a tener acceso a cartContext
const Cart = () =>{
    const test = useContext(CartContext)
return(
    <>
{

    test.cartList.length > 0 ?
    test.cartList.map(item=>
        <table>
            <tr>
                <td>
                    <img className='product__img' src={item.imgItem} alt='philadefia' ></img>
                </td>
        
                <td>
                    <h3>{item.nameItem}</h3>
                    <h3>{item.descriptionItem}</h3>
                    <h3>Cantidad: {item.qtyItems}</h3>
                    <h3>Precio unidad: {item.priceItem}</h3> 
                    <h3>Precio: $ {test.calcularTotalPorItem(item.idItem) }</h3>
                    <button onClick={()=>test.deleteItem(item.idItem) }>ELIMINAR PRODUCTO</button>
                </td>        
            </tr>
         
        </table>
    )
    :<div className='contentNoProducts'>
        <h1>NO HAY PRODUCTOS</h1>
    </div>
}
    <div className='contentTotal'>
        <h2>Total: $ {test.calcSubTotal()}</h2>
        <button onClick={test.removeProductsCart}>BORRAR CARRITO</button>
        <button><Link to='/menu'>Voler al menu</Link></button>
    </div>
</>
)
}


export default Cart;
