//EL DETALLE DE CADA PRODUCTO DE A UNO
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import products from '../utils/products'
import { useParams } from 'react-router'



const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {        
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;