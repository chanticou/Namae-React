import ItemCount from './ItemCount';
import { Link } from 'react-router-dom'
import { useState } from 'react';

import { useContext } from 'react'
import { CartContext } from '../components/CartContext'


const ItemDetail = ({ item }) => {

    const [itemCount,setItemCount]= useState(0);
    const test = useContext(CartContext)

    
    const onAdd = (qty) => {
        alert("Tienes:" + qty + " productos");
        setItemCount(qty)
        test.addToCart(item, qty)
    }


    return (
        <>    

        <div className='productsContainer'>
            <img className='product__img' src={item.img} alt='philadefia' ></img>
            <div>           
                <h3 className='product__title'>{item.name}</h3>            
                <p>{item.description}</p>
                <p>Category:{item.idCategory}</p>
                <h3 className='product__price'>Precio:$ {item.price}</h3>
                <h3>Stock:{item.stock}</h3>
         
                <ItemCount stock={item.stock} onAdd={onAdd}/>            
                
            </div>
            <button><Link to='/menu'>Voler al menu</Link></button>


        </div>              
        </>
    );
}
                
export default ItemDetail;
