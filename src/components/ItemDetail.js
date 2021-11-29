import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {
    // const onAdd = (qty) => {
    //     alert("You have selected " + qty + " items.");
    // }
    console.log('SOY ITEM',item)
    return (
        <>    
        <div className='productsContainer'>
            <img src={item.img} alt='name'></img>
            <h3>{item.name}</h3>
            <h3>{item.id}</h3>
            <h4>{item.description}</h4>
            <h4>Category:{item.idCategory}</h4>
            <h4>Stock:{item.stock}</h4>
            <h3>Price:$ {item.price}</h3>
            : <p>Cargando...</p>
        
        </div>
        </>
    );
}

export default ItemDetail;