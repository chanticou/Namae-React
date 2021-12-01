import Item from './Item'
import ItemCount from './ItemCount';



const  ItemList=({items})=>{
    return (
        <>
        {
            items.length > 0
            ? <div className='contentMainCards'>{items.map((item=><Item key={item.id} id={item.id} idCategory={item.idCategory} name={item.name} description={item.description} stock={item.stock} price={item.price}  img={item.img} />))}</div>
            :<p>Cargando...</p> 
        }
        </>
    )
}


export default ItemList ;


