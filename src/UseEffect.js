// import React, { useState, useEffect } from 'react';


// const UseEffect = () =>{

//     //HOOK USESTATE
//     //PRIMERO SE EJECUTA USE STATE 1.
//     const [contador, setContador] = useState(0)

//     //HOOK USEEFFECT => SE VA A EJECUTAR CADA VEZ QUE SE EJECUTE USE STATE renderizando la pantalla
//     //y cada vez que se renderiza el dom, se va a activar useEffect
//     //Tiene una funcion anonima
//     //omo primer argumento tiene una funcion anonima y como segundo argumento tiene un aray vacio
//     //en las clases este se llama componentDidMount
//     useEffect(()=>{
//         console.log('ESTE ES USE EFFECT', {contador})
//     },[]);   //=>array vacio


//     let contadorFunction = () =>{
//         setContador(contador+1)
//     }


//     return(
//     <>
//         <button onClick={contadorFunction}>+</button>{contador}


//     </>
//     )
// }

// export default UseEffect;
