

// const Item =({name, description, stock, price, idCategory, img})=>{
    
 
    
    
//     return(
//         <>
//         <div className='content-presentation'>
//             <div className='productsContainer'>

//                 <div OnOver={eventHover} className='content-img' >
//                     <img src={img} alt='philadefia' ></img>
//                 </div>        
//                     <h3>{name}</h3>
//                 <h4>{description}</h4>
//                 <h4>Category:{idCategory}</h4>
//                 <h4>Stock:{stock}</h4>
//                 <h3>Price:$ {price}</h3>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Item;






// <div className='content-presentation'>
// <div className='productsContainer'>

//     <h3>{name}</h3>
//     <h4>{description}</h4>
//     <h4>Category:{idCategory}</h4>
//     <h4>Stock:{stock}</h4>
//     <h3>Price:$ {price}</h3>
// </div>
// </div>

// IMPORTAR USESTATE PARA PODER USARLO 
import { useState } from "react";
import ItemCount from './ItemCount'

import { Link} from 'react-router-dom'

const Item = ({id, name, description, stock, price, idCategory, img}) =>{
        console.log(name)
    //ESTADOS
    //MOSTRAR DESCRIPCION
    const [mostrarDescription, setMostrarDescription] = useState(true)
    

    //ADDEVENTLISTENER DESCRIPTON FOOD
    const descriptionFood = () =>{
        setMostrarDescription(!mostrarDescription)
    }

    return(
    <>
        <div className='productsContainer'>
            <div className='content-img'>
                <img src={img} alt='philadefia' ></img>
            </div>
            <h3>{name}</h3>
            
            <h3>ID:{id}</h3>
            <button onClick={descriptionFood}>Ver/Ocultar</button>

            {
                //operador cortocircuito, cuando el operador ternrio no tiene nada en el else se pone eso &&
                mostrarDescription &&
                <>
                <h3>ID:{id}</h3>
                <h3>{name}</h3>
                <h4>{description}</h4>
                <h4>Category:{idCategory}</h4>
                <h4>Stock:{stock}</h4>
                <h3>Price:$ {price}</h3>
                
                <button><Link to={`/item/${id}`}>Details</Link></button>
              

          
                </>
            }
            
            
        </div>
        </>
    )
} 
    
    
    export default Item;
    
    
























