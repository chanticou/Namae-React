import ItemCount from './ItemCount';
import CartWidget from '../components/CartWidget'
import { Link } from 'react-router-dom'



const ItemDetail = ({ item }) => {
    
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        
    }


    return (
        <>    

        <div className='productsContainer'>
            <img className='product__img' src={item.img} alt='philadefia' ></img>
            <div>           
                <h3 className='product__title'>{item.name}</h3>            
                <p>{item.description}</p>
                <p>Category:{item.idCategory}</p>
                <h3 className='product__price'>Precio:$ {item.price}</h3>
                <h3>Stock:{item.stock}</h3>
         
                <ItemCount stock={item.stock} onAdd={onAdd}/>            
                
            </div>
            <button><Link to='/menu'>Voler al menu</Link></button>


        </div>              
        </>
    );
}
                
export default ItemDetail;
