import Item from './Item'



const  ItemList=({items})=>{
    return (
        <>
        {
            items.length > 0
            ?items.map((item=><Item id={item.id} idCategory={item.idCategory} name={item.name} description={item.description} stock={item.stock} price={item.price}  img={item.img} />))
            :<p>Cargando...</p> 
        }
        </>
    )
}


export default ItemList ;


