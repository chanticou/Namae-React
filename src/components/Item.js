// IMPORTAR USESTATE PARA PODER USARLO 
import { useState } from "react";
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, stock}) =>{
    
    return(
        <>
        <div className='productsContainer'>
        <img className='product__img' src={img} alt='philadefia' ></img>
        <h3 className='product__title'>{name}</h3>            
        <button className='detailsButton'><Link to={`/item/${id}`}>Details</Link></button>  
        </div>
    </>
    )
} 
    
    
export default Item;
    
    






// //ESTADOS
// //MOSTRAR DESCRIPCION
// const [mostrarDescription, setMostrarDescription] = useState(true)

// //ADDEVENTLISTENER DESCRIPTON FOOD
// const descriptionFood = () =>{
//     setMostrarDescription(!mostrarDescription)
// }



// <button onClick={descriptionFood}>Ver/Ocultar</button>
// {
//     //operador cortocircuito, cuando el operador ternrio no tiene nada en el else se pone eso &&
//     mostrarDescription &&
    
//     <div className='product__description'>

//         <p>{description}</p>
//         <p>Category:{idCategory}</p>
//         <p>Stock:{stock}</p>
//         <h3 className='product__price'>Price:$ {price}</h3>
//         <button className='detailsButton'><Link to={`/item/${id}`}>Details</Link></button>  
//         </div>
//         // <ItemCount stock={stock}/>
//     }            















