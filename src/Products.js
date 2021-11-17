// IMPORTAR USESTATE PARA PODER USARLO 
import { useState } from "react";


const Products = ({name, description, price, stock, img}) =>{


    //ESTADOS
    //MOSTRAR DESCRIPCION
    const [mostrarDescription, setMostrarDescription] = useState(true)

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

    //ADDEVENTLISTENER DESCRIPTON FOOD
    const descriptionFood = () =>{
        setMostrarDescription(!mostrarDescription)
    }



    //FIN FUNCIONES

    //RETURN
    return(
    <>
        <div className='productsContainer'>
            <div className='content-img'>
                <img src={img} alt='philadefia' ></img>
            </div>
            <h3>{name}</h3>
            <button onClick={descriptionFood}>Ver/Ocultar</button>

            {
                //operador cortocircuito, cuando el operador ternrio no tiene nada en el else se pone eso &&
                mostrarDescription &&
                <>
                <h4>{description}</h4>
                <h3>Precio:$ {price}</h3>
                </>
            }

     
            <button onClick={sumar}>  + </button><span className='quiantity'>{contador}</span>
            
            <button onClick={restar}> -  </button><span className='quiantity'></span>
            
    
            <button disabled={sinStock}>comprar</button>

            
        </div>



    </>
    )
} 



export default Products;








































