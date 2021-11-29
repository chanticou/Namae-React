//ESTE COMPONENTE ES EL CONTADOR


// import { Button } from '@material-ui/core';
// import { Add, Remove } from '@material-ui/icons';
// import { useEffect, useState } from 'react';
// import { ProductAmountContainer, ProductAmount } from './styledComponents';

// const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         setCount(initial);
//     },[]);

//     const increment = () => {
//         if (count < stock) {
//             setCount(count + 1);
//         }
//     }
    
//     const decrement = () => {
//         if (count > initial) {
//             setCount(count - 1);
//         }
//     }
//     return (
//         <ProductAmountContainer>
//             <Button variant="text" onClick={increment}><Add /></Button>
//             <ProductAmount>{count}</ProductAmount>
//             <Button variant="text" onClick={decrement}><Remove /></Button>
//             {
//                 stock
//                 ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
//                 : <Button variant="contained" disabled>Add to Cart</Button>
//             }
            
//         </ProductAmountContainer>
//     );
// }

// export default ItemCount;










import { useState } from 'react';
import { useParams } from 'react-router';



const ItemCount = () => {
    
    const { stock } = useParams();
    const [datos,setdatos] =useState(stock)
    const[sinStock, setSinStock] = useState(false)   

    //contador
    //usestate(0)=> me va a devolver un array, y decir cual es el valor inicial que contiene el estado
    //ese arreglo va a contener dos valores, el primero es el valor que contiene el estado (en este caso 0)
    //El segundo valor es una funcion, que permite actualizar el estado, va a reemplazar el estado anterior

    const [contador, setcontador] = useState(0)

    //FUNCIONES
    const sumar=()=>{
        //setcontador => metodo ASINCRONO => metodo que cambia el estado es Asincrono
        if(contador < stock){
            console.log(stock)
            setcontador(contador + 1)
    
        
        }else{
            setSinStock(true)
      
        }
    }


    const restar =()=>{
        if(contador > 0) {
        setcontador(contador-1)
        setSinStock(false)
        }
    
    }

    //FIN FUNCIONES

    return (
        <>
    
            <div className='content-button'>
                <button onClick={restar}> -  </button>
                <span className='quiantity'>{contador}</span>
                <button onClick={sumar}>  + </button>
            </div>
            <button className='buttonBuy' disabled={sinStock}>comprar</button>
        

    </>
    )

} 



export default ItemCount;










