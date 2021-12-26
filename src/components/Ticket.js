
// import {addDoc,collection, getFirestore } from  "firebase/firestore"
// import { useContext,useState } from 'react'
// import { CartContext } from '../components/CartContext'



// const Ticket =()=>{
//     const test = useContext(CartContext)
//    const {getUsers}=useContext(CartContext)
   
//     const [goTicket,setGoTicket]=useState(false)
//     const [form, getForm] = useState({nombre:'',email:''})

    
//     // const llenarFormulario=(e)=>{
//     //     const {name,value} = e.target
//     //     getForm[{
//     //         ...form,
//     //         [name]:value,
//     //     }]
//     // }


//     const finalizar=()=>{
//         getUsers(form)
//         const db = getFirestore();
//         const ref = collection(db,'ticket')
//         const newOrder={
//             buyer: form.email,
//             items:test.cartList,

//             total:test.calcSubTotal()
//         }
//         addDoc(ref,newOrder)
//         setGoTicket(true)
 
//     }

//     return(

//         <>

//             <form method='POST' onSubmit={finalizar}>
//                 <input
//                 // onChange={llenarFormulario}
//                 type='email'
//                 name='email'
//                 placeholder='Email...'
//                 ></input>

//                 <input
//                 // onChange={llenarFormulario}
//                 type='text'
//                 name='nombre'
//                 placeholder='Nombre...'
//                 ></input><button onClick={finalizar}>Finalizar</button>
                
//             </form>
        
//         </>
//     )
// }


// export default Ticket;