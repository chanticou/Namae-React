
import { useState } from 'react';
import CartWidget  from './CartWidget';
import { Link } from 'react-router-dom'


const ItemCount = ({stock, onAdd}) => {

    //contador
    //usestate(0)=> me va a devolver un array, y decir cual es el valor inicial que contiene el estado
    //ese arreglo va a contener dos valores, el primero es el valor que contiene el estado (en este caso 0)
    //El segundo valor es una funcion, que permite actualizar el estado, va a reemplazar el estado anterior
    
    const [contador, setcontador] = useState(0)
    
    //FUNCIONES
    const sumar=()=>{
        // setcontador => metodo ASINCRONO => metodo que cambia el estado es Asincrono
        if(contador < stock){
            console.log('HOLA')
            setcontador(contador + 1)
            
        }else{
            console.log('else')
        }
    }
    
    
    const restar =()=>{
        if(contador > 0) {
            setcontador(contador-1)
            
        }
    }
    
    //FIN FUNCIONES
    
    return (
        <>
      
        
        <div className='content-button'>
            <button onClick={restar}> -  </button>
            <span className='quiantity'>{contador}</span>
            <button onClick={sumar}>  + </button>
            <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
        
        
        </>
        )
        
    } 
    
    
    
    export default ItemCount;
    
    
    // <Link to='/cart'><button>CHEKoUT</button></Link>           


    // <CartWidget />{contador}








