import { Link } from 'react-router-dom'
import SearchForm from '../components/SearchForms'
import CartWidget  from './CartWidget';



const NavBar = ()=>{


    return(
   
        <div className='content-navBar'>
            <ul className='ul'>
                <li><Link to='/'>HOME</Link></li>                    
                <li><Link to='/woks/Es4FtJw6MGY4u3hMXoqJ'>WOKS</Link></li>
                <li><Link to='/rolls/llvLMdvftOKYN5qhc2Vi'>ROLLS</Link></li>
                <li><Link to='/dimsun/XZicpPtnq4pakAM9lySK'>DIMSUN</Link></li>
                <li><SearchForm /></li>
                <li><Link to='/cart'><CartWidget /></Link></li>
            </ul>
        </div>
    )
}
    
    // <li><SearchArea /></li>

export default NavBar;