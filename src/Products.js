// IMPORTAR USESTATE PARA PODER USARLO 
import { useState } from "react";


const Products = (props) =>{

    // USANDO LOS ESTADOS
    const [quantityProducts, setQuantityProducts] = useState(0)

    const increment=()=>{
        setQuantityProducts(quantityProducts+1)
        console.log()
    }

    return(
    <>

        <div className='productsContainer'>
            <div className='content-img'>
                <img src={props.img} alt='philadefia' ></img>
            </div>
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <h3>Price:$ {props.price}</h3>
            <button onClick={increment}>ADD TO CART </button><span className='quiantity'>{quantityProducts}</span>
        </div>

    </>
    )
} 



export default Products;