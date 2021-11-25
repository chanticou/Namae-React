import sushimain from './assets/img/sushiMain.jpg'
import palitosUno from './assets/img/sushi-palitos-1.png'


const Main=()=>{
    return(
        <>
        <div>
            <div className='content-img-main'>
               
                <div className='frase-imagen'>
                    <h1>NAMAE</h1>
                    <h2>SUSHI EN BUENOS AIRES</h2>
                </div>
            </div>
            <div className='contentMain'>
                <div className='contentInfo'>
                    <p>LOGO NAMAE </p>
                 

                        <h3>Días y horarios:</h3>
                        <p>Martes a Domingos</p>
                        <h3>Delivery</h3> 
                        <p> de 19:30 a 23:00</p>
                        <h3>Take-away</h3>
                        <p> de 19:30 a 23:00</p>
                        <h3>Salón:</h3>
                        <p> de 20:00 a 00:00</p>
                        <h3>Pedidos y reservas:</h3>
                        <p>4784-5807
                        11-2542-0653</p>
                        <h3>Estamos en:
                        Moldes 1502 – Belgrano</h3>  
                </div>
                
                <img className='palitosSushi' src = {palitosUno} alto='PalitosUno'></img>
            </div>

        </div>
        </>
    )
}

export default Main;
