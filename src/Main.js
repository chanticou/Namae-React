

const Main=(props)=>{
    return(
        <>

        <div className='content-presentation'>
            <h3>{props.city}</h3>
            <h1>{props.name}</h1>
            <p>{props.paragraph}</p>
        </div>
        </>
    )
}

export default Main;
