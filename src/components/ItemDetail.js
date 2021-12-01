import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {

    // const onAdd = (qty) => {
    //     alert("You have selected " + qty + " items.");
    // }
 
    return (
        <>    
        <div className='productsContainer'>
            <img className='product__img' src={item.img} alt='philadefia' ></img>
            <div>           
                <h3 className='product__title'>{item.name}</h3>            
                <p>{item.description}</p>
                <p>Category:{item.idCategory}</p>
                <h3 className='product__price'>Price:$ {item.price}</h3>
                <h3>Stock:{item.stock}</h3>
                        
                <div className='itemCount'>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
                   
                    
        </>
    );
}
                
export default ItemDetail;
                // <p>Stock:{item.stock}</p>
                // <ItemCount stock={stock}/>