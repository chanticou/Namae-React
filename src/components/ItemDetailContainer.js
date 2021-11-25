// import { useEffect, useState } from "react";

// import customFetch from "./customFetch";
// import ItemDetail from "./ItemDetail";
// import { datos } from './datos'

// const ItemDetailContainer = () => {
//     const [dato, setDato] = useState({});
//     const { idItem } = useParams();

//     useEffect(() => {
        
//         customFetch(2000, datos.find(item => item.id === parseInt(idItem)))
//             .then(result => setDato(result))
//             .catch(err => console.log(err))
   

//     }, []);
    
//     return (
//         <ItemDetail item={dato} />
//     );
// }

// export default ItemDetailContainer;