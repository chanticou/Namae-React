
import { Link } from 'react-router-dom'



const NavBar = ()=>{
    return(
      
        <div className='content-navBar'>
          <ul className='ul'>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/menu'>MENU</Link></li>
              <li><Link to='/menu/:idCategory'></Link></li>
              <li><Link to='aboutUs'>CONTACTO</Link></li>
          </ul>
        </div>
    )
}


export default NavBar;