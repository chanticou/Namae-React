import { useContext } from 'react'
import { CartContext } from '../components/CartContext'
import { Link } from 'react-router-dom'
import db from '../utils/fireBaseConfig'
import {setDoc, collection, doc, updateDoc,increment } from  "firebase/firestore"

//El componente carrito va a tener acceso a cartContext
const Cart = () =>{
    const test = useContext(CartContext)


    const createOrder=()=>{
        let order={
         
            items: test.cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                price:item.priceItem,
                qty:item.qtyItems
            })),
   

            // total:test.calcSubTotal()
        
        };
        
        const createOrderFireStore= async()=>{
        const newOrderRef = doc(collection( db,'orders'))
        await setDoc(newOrderRef,order)
        return (newOrderRef)
        }

        createOrderFireStore()
            .then(result=>alert(result.id))
            .catch(err=>console.log(err))

        test.removeProductsCart()

        test.cartList.forEach(async(item)=>{
            const itemRef = doc(db,'products',item.idItem)
            await updateDoc(itemRef,{
                stock:increment(- item.qtyItems)
            })
        })
    }

 
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
    
                    <td className='contentItemCart'>
                        <h3 className='itemDetailName'>{item.nameItem}</h3>
                    
                        <h3>{item.descriptionItem}</h3>
                        <h3>Cantidad: {item.qtyItems}</h3>
                        <h3>Precio unidad: {item.priceItem}</h3> 
                        <h3>Total producto: $ {test.calcularTotalPorItem(item.idItem) }</h3>
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
        <h2>TICKET</h2>
            <button onClick={test.removeProductsCart}>BORRAR CARRITO</button>
        </div>

    </>
    )
}


export default Cart;
