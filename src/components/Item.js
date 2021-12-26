import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock }) =>{
    
    return(
        <>
        <div className='productsContainer'>
            <img className='product__img' src={img} alt='philadefia' ></img>
            <h3 className='product__title'>{name}</h3>  
            <h3>Stock:{stock}</h3>
            <h3 className='product__price'>Precio:$ {price}</h3>        

            <button className='detailsButton'><Link to={`/item/${id}`}>Details</Link></button>  
        </div>
        </>
    )

} 
    
    
export default Item;
    
    