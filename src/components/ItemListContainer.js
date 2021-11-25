
import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList'
import customFetch from '../utils/customFetch'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router'
import products from '../utils/products'
// const { products } = require('../utils/products')

const ItemListContainer = () =>{
    //ESTADOS
    //Este estado va a cargar todos los productos
    const [datos, setDatos]  = useState([]);
    //capturamos el parametro idCategory
    const { idCategory } = useParams();
    
    console.log(idCategory)

    //componente diupdate
    useEffect(() => {
        customFetch(2000, products.find(item => {
            //si idCategory es indefinido que me retorna todos los productos = item
            if(idCategory === undefined){
                console.log('undefined',idCategory);
                return item;
            }else{
                console.log('numero',idCategory);
               return item.idCategory === parseInt(idCategory)
            }
        }))
            .then(result => setDatos(result))
            .catch(err=> console.log(err))  
        console.log(idCategory)
        // console.log('esto es datos',datos)
    },[datos]);

    // const onAdd = (qty) =>{
    //     alert('seleccionaste' + qty + 'cantidad de items')
    // }

    return(
        <>
          <h1>HOLA</h1>
        </>
    )

}



export default ItemListContainer;