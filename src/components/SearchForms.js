import lupa from '../assets/img/lupa.png'


const SearchForm = () =>{

    const vocales=['a','e','i','o','u']
    
    const handleChange=(e)=>{
        vocales.forEach((vocal)=>{
            if(e.key === vocal){
                e.preventDefault()
                console.log('soy la letra', e.key)
            }
        })
        
     
     
     
        // if ((e.key === 'a')|(e.key === 'e')|(e.key === 'i')|(e.key === 'o')|(e.key === 'u')) {
        //     console.log('ESPACIO VACIO')
        //     e.preventDefault()
        // }
    }
    return(
        <form>
            <input onChange={handleChange} placeholder='BUSCADOR...'></input>
        </form>
    )
}

export default SearchForm;

// <img className='lupa' src={lupa} alt='Lupa'></img>