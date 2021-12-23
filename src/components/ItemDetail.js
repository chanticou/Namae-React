import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react'
import { CartContext } from '../components/CartContext'


const ItemDetail = ({ item }) => {
    console.log(item.idCategory,'SOY ITEM CATEGORY')

    const [itemCount,setItemCount]= useState(0);
    const test = useContext(CartContext)

    
    const onAdd = (qty) => {
        console.log(qty,'SOY QTY')
        alert("Tienes:" + qty + " productos");
        setItemCount(qty)
        test.addToCart(item, qty)
    }


    return (
        <>    

        <table className='tableItemDetail'>
            <tr>
                <td>
                    <img className='product__img' src={item.img} alt='philadefia' ></img>
                </td>

                <td>           
                    <h3 className='product__title'>{item.name}</h3>            
                    <p>{item.description}</p>
                    <p>Category:{item.idCategory}</p>
                    <h3 className='product__price'>Precio:$ {item.price}</h3>
                    <h3>Stock:{item.stock}</h3>
               
                    <ItemCount stock={item.stock} onAdd={onAdd} cartQuantity={itemCount}/>            
                    
                </td>

            </tr>
            
        </table>     
        
        <div className='menu'>     
            <button><Link to='/menu'>Voler al menu</Link></button>
        </div>
        </>
    );
}
                
export default ItemDetail;
