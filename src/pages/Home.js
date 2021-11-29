
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom'
import Main from '../Main'
import StickySearchCart from '../components/StickySearchCart'
import ItemDetailContainer from '../components/ItemDetailContainer'
//Muestra los productos
import ItemListContainer from '../components/ItemListContainer'


const NavBar = () =>{

  return(
      <BrowserRouter>   
          <div className='content-navBar'>
            <ul className='ul'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/menu'>MENU</Link></li>
                <li><Link to='/menu/:idCategory'></Link></li>
                <li><Link to='aboutUs'>CONTACTO</Link></li>
            </ul>
          </div>
      <Switch>                
          <Route exact path='/'>
            <Main />
          </Route>
          
          <Route exact path='/menu'>
              <StickySearchCart />
              <ItemListContainer />
          </Route>

          <Route exact path='/menu/:idCategory'>
              <ItemListContainer />
          </Route>
                    
          <Route exact path='/item/:idItem'>
            <ItemDetailContainer />
          </Route>
          
          <Route exact path='/aboutUs'>
          <p>SOY EL ABOUT US</p>
          </Route>
          
          
      </Switch>

    </BrowserRouter>
  )
}
    
  export default NavBar;





