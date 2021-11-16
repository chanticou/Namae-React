
// resolve= cuando la promesa se cumple
// reject= cuando la promesa no se cumple

// simulamos una variable a la cual inicializamos en true
let is_ok=false
let dinero = 1000

let prestamo = () => {
    return new Promise ((resolve, reject)=>{
        if(is_ok){
            resolve(dinero)
        }else{
            reject('NO SE CUMPLIO LA PROMESA')
        }
    })
}


// AHORA DATOS VA A SER 1000
// then: se utiliza para capturar lo que la promesa devuelve
//  cuando la promesase ha cumplido
// CATCH=> NOS SIRV PARA INTERACTUAR CUANDO LA PROMES ANO SE HA CUMPLIDO
prestamo()
    .then(datos=>{
        console.log(datos)})
    .catch(error=>{console.log(error)})
    