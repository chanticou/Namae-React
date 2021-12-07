import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList'
import customFetch from '../utils/customFetch'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router'
import products from '../utils/products'

const ItemListContainer = () =>{
    //ESTADOS
    //Este estado va a cargar todos los productos
    const [datos, setDatos]  = useState([]);
    //capturamos el parametro idCategory
    const { idCategory } = useParams();

    //componente diupdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            //si idCategory es indefinido que me retorna todos los productos = item
            if(idCategory === undefined){           
                return item;

            }else{
                return item.idCategory === parseInt(idCategory)
            }
        }))
            .then(result => setDatos(result))
            .catch(err=> console.log(err))  

    },[idCategory]);

    // const onAdd = (qty) =>{
    //     alert('seleccionaste' + qty + 'cantidad de items')
    // }

    return(
        <>
          <ItemList items={datos} />
        </>
    )

}



export default ItemListContainer;
