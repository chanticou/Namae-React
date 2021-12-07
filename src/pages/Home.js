
//2)
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom'
import Main from '../Main'
import StickySearchCart from '../components/StickySearchCart'
import ItemDetailContainer from '../components/ItemDetailContainer'
//Muestra los productos
import ItemListContainer from '../components/ItemListContainer'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'
import CartContextProvider from '../components/CartContext'

const Home = () =>{

  return(

    <CartContextProvider>    
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

          <Route exact path='/woks/:idCategory'>
              <ItemListContainer />
          </Route>
          <Route exact path='/rolls/:idCategory'>
            <ItemListContainer />
          </Route>

          <Route exact path='/dimsun/:idCategory'>
            <ItemListContainer />
          </Route>
                    
          <Route exact path='/item/:idItem'>
            <ItemDetailContainer />
          </Route>
          
          <Route exact path='/aboutUs'>
          <p>SOY EL ABOUT US</p>
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>

            
        </Switch>

      </BrowserRouter>
      </CartContextProvider>

  )
}
    
  export default Home;





