
import { Link } from 'react-router-dom'
import SearchArea from './SearchArea';
import SearchForm from '../components/SearchForms'
import CartWidget  from './CartWidget';


const NavBar = ()=>{
    return(
      
        <div className='content-navBar'>
            <ul className='ul'>
                <li><Link to='/'>HOME</Link></li>                    
                <li><Link to='/woks/2'>WOKS</Link></li>
                <li><Link to='/rolls/3'>ROLLS</Link></li>
                <li><Link to='/dimsun/5'>DIMSUN</Link></li>
                <li><SearchForm /></li>
                <li><Link to='/cart'><CartWidget /></Link></li>
            </ul>
        </div>
    )
}
    
    // <li><SearchArea /></li>

export default NavBar;