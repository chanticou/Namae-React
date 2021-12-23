import Item from './Item'




const ItemList = ({ items, category }) => {
    return (
        <>
            {
                items.length > 0
                    ? <div className='contentMainCards'>
                        {items.map((item => item.idCategory === category ?
                            <Item key={item.id} id={item.id} idCategory={item.idCategory} name={item.name} description={item.description} stock={item.stock} price={item.price} img={item.img} /> 
                            : '' ))}
                    </div>

                    : <p>Cargando...</p>
            }
        </>
    )
}


export default ItemList;