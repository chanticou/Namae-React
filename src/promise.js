import data from './data'


// resolve= cuando la promesa se cumple
// reject= cuando la promesa no se cumple

// simulamos una variable a la cual inicializamos en true
let is_stock=true;


let promiseProducts = ( timeout,task) => {
    return new Promise ((resolve, reject)=>{
        if(is_stock){
            setTimeout(() => {
                resolve(task)    
            },timeout);
            
        }else{
            reject('error!!')
        }
    })
}



promiseProducts(0,console.log( 'Empezo a ejecutarse mi promesa')) //=> esto me va a devovler promesa e estado pendiente,
                                                                 //La promesa tiene tres estados, pendient, aceptada rehazada.
    
    //USO THEN PARA CUANDO LA PROMESA SE CUMPLE
    .then(()=>promiseProducts(9000,
         data.map(dt=>console.log(dt.name))
         ))



    //catch para cuando la promes ano se cumple
    .catch((err)=>promiseProducts(2000, console.log(err)))

    .finally(()=>console.log('Productos temrinados'))






export default Promise;


// AHORA DATOS VA A SER 1000
// then: se utiliza para capturar lo que la promesa devuelve
//  cuando la promesase ha cumplido
// CATCH=> NOS SIRV PARA INTERACTUAR CUANDO LA PROMES ANO SE HA CUMPLIDO
// prestamo()
//     .then(datos=>{
//         console.log(datos)})
//     .catch(error=>{console.log(error)})
    
