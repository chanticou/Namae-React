import db from './fireBaseConfig'
import { collection, getDocs } from "firebase/firestore";
// import products from '../utils/products'



const fireStoreFetch = async()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))
    return dataFromFirestore;
    
}


export default fireStoreFetch ;