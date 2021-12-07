import React from 'react'
import { useState } from 'react';

 
export const CartContext = React.createContext(); 


const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    
    const addToCart = (item, qty) =>{
        
        setCartList([
            ...cartList,
            {
                imgItem:item.img,
                idItem: item.id,
                nameItem:item.name,
                priceItem:item.price,
                descriptionItem:item.description,
                qtyItems:qty
            }

        ])
       
        
    }


    return(
        
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
        
    )
}

export default CartContextProvider;
