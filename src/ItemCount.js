// IMPORTAR USESTATE PARA PODER USARLO 
// import { useState } from "react";



// const ItemCount = ()=>{

//     const[sinStock, setSinStock] = useState(false)

//     //contador
//     //usestate(0)=> me va a devolver un array, y decir cual es el valor inicial que contiene el estado
//     //ese arreglo va a contener dos valores, el primero es el valor que contiene el estado (en este caso 0)
//     //El segundo valor es una funcion, que permite actualizar el estado, va a reemplazar el estado anterior
//     const [contador, setcontador] = useState(0)



//     //FUNCIONES
//     const sumar=()=>{
       

//         //setcontador => metodo ASINCRONO => metodo que cambia el estado es Asincrono
//         if(contador < stock){
           
//             setcontador(contador + 1)
//             console.log('+1')

        
//         }else{
//                 setSinStock(true)
        
//             }
//         }


//         const restar =()=>{
//             if(contador > 0) {
//             setcontador(contador-1)
//             setSinStock(false)
//             }

//         }

//         return(
//             <>
                
//             <button onClick={sumar}>  + </button><span className='quiantity'>{contador}</span>
                
//             <button onClick={restar}> -  </button><span className='quiantity'></span>
            

//             <button disabled={sinStock}>comprar</button>
//             </>
//         )

// }




// export default ItemCount;