//EL DETALLE DE CADA PRODUCTO DE A UNO
import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";

import { useParams } from 'react-router'

import { fireStoreFetchOne } from '../utils/firestoreFetch'



const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {        
        fireStoreFetchOne(idItem)
            .then(result =>setDato(result))
            .catch(err => console.log(err,'SOT EL ERROR DE LA LLAMADA'))
    }, []);

    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;