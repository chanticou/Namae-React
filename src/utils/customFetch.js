

// resolve= cuando la promesa se cumple
// reject= cuando la promesa no se cumple

// simulamos una variable a la cual inicializamos en true
let is_stock=true;


let customFetch = (time, task) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(is_stock){
                resolve(task)    
            }else {
                reject('errorr!!')
            }
        }, time)
    })
}





export default customFetch;