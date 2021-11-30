
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom'
import Main from '../Main'
import StickySearchCart from '../components/StickySearchCart'
import ItemDetailContainer from '../components/ItemDetailContainer'
//Muestra los productos
import ItemListContainer from '../components/ItemListContainer'
import NavBar from '../components/NavBar'


const Home = () =>{

  return(
    <BrowserRouter>  

      <NavBar />

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
    
  export default Home;





