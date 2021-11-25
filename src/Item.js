// IMPORTAR USESTATE PARA PODER USARLO 
import { useState } from "react";
import ItemCount from './ItemCount'

const Item = ({name, description, price, stock, img}) =>{

    //ESTADOS
    //MOSTRAR DESCRIPCION
    const [mostrarDescription, setMostrarDescription] = useState(true)
    

    //ADDEVENTLISTENER DESCRIPTON FOOD
    const descriptionFood = () =>{
        setMostrarDescription(!mostrarDescription)
    }

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
                <h4 className='description'>{description}</h4>
                <h3>Precio:$ {price}</h3>
                </>
            }
            
            <ItemCount />
            
        </div>



    </>
    )
} 



export default Item;








































