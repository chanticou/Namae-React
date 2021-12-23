import db from './fireBaseConfig'
import { collection, getDoc, getDocs, where , query, doc, orderBy} from "firebase/firestore";
// import products from '../utils/products'



 const fireStoreFetch = async(idCategory)=>{
    let q;
    if(idCategory){
        q= (collection(db, "products"), where('categoryId', '==', idCategory))
    }else{
        q= query(collection(db,'products'), orderBy('name'))
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))

    return dataFromFirestore;   
}




//PARA OBTENER EL ITEMDETAIL
export const fireStoreFetchOne = async(idItem)=>{
    const docRef = doc(db,'products',idItem)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        return{
            id:idItem,
            ...docSnap.data()
        }
    }else{
        console.log('no es un doc')
    }
} ;

// import db from './fireBaseConfig'
// import { collection, getDocs } from "firebase/firestore";
// import products from '../utils/products'



// const fireStoreFetch = async()=>{
//     const querySnapshot = await getDocs(collection(db, "products"));
//     const dataFromFirestore = querySnapshot.docs.map(document => ({
//         id: document.id,
//         ...document.data()
//     }))
//     return dataFromFirestore;
    
// }

// export default fireStoreFetchOne;
export default fireStoreFetch ;