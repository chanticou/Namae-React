import React from 'react'
import { useState } from 'react';

 
export const CartContext = React.createContext(); 


const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    
    const addToCart = (item, qty) =>{
        let found = cartList.find(product => product.idItem === item.id)
        console.log(item.id)
        if(found === undefined){
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
        }else{
            //Si el producto esta, aumentamos su cantidad
            found.qtyItems += qty;
        }
      
    }

    //PARA BORRAR LOS PRODUCTOS DEL CARRITO
    const removeProductsCart = () => {
        setCartList([])
    }

    //FILTRANDO TODOS LOS ELEMENTOS AL ID QUE LE PASAS, EL ID QUE QUIERO BORRAAR ES EL QUE LE PASO,
    //ENTONCES EL FILTER DEVUELVE TODOS LOS PRODUCTOS, MENOS EL QUE QUIERO BORRAR,
    //ENTONCES EL RESULTREMOVE, ME QUEDAN TODOS LOS ELEMENTOS MENOS EL QUE YO LE PASO POR ARGUMENTO
    const deleteItem = (id) => {
        let resultRemove = cartList.filter(item => item.idItem != id);
        setCartList(resultRemove)
    }

    //TOTAL POR ITEM
    const calcularTotalPorItem = (idItem) =>{
        let index = cartList.map(item=>item.idItem).indexOf(idItem)
        return cartList[index].priceItem * cartList[index].qtyItems
    }



    //SUBTOTAL
    const calcSubTotal = () =>{
        let subTotal = cartList.map(item => calcularTotalPorItem(item.idItem))

        let metodoReduce=subTotal.reduce((acc,item)=> acc + item)
        return metodoReduce;
    }

    return(
        <CartContext.Provider value={{ cartList, addToCart, removeProductsCart,  deleteItem, calcularTotalPorItem, calcSubTotal  }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
