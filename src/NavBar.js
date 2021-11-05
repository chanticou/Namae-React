import CartWidget from './CartWidget'



const NavBar =()=>{
    return(
        <div className='content-navBar'>
            <>
            <ul className='ul'>
                <li>MENU</li>
                <li>PEDIR ONLINE</li>
                <li>PROMOS</li>
                <li>CONTACTO</li>
                <li><CartWidget/></li>
            </ul>
       
            </>
        </div>
    )
}


export default NavBar;