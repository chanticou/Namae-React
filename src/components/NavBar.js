
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom'
import Main from '../Main'
// import SearchArea from '../SearchArea'

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
            <ItemListContainer
            />
                <li><Link to='aboutUs'>CONTACTO</Link></li>
            </ul>
          </div>
      <Switch>
                
          <Route exact path='/'>
            <Main />
          </Route>
          
          <Route exact path='/menu'>
              <ItemListContainer />
          </Route>

          <Route exact path='/menu/:idCategory'>
              <ItemListContainer />
          </Route>
          
          
          <Route exact path='/aboutUs'>
          <p>SOY EL ABOUT US</p>
          </Route>
          
          
          <Route exact path='/ItemDetail'>
          
          </Route>
          
      </Switch>

    </BrowserRouter>
  )
}
    
  export default NavBar;











// import { AppBar } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import CartWidget from "./CartWidget";
// import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

// const NavBar = () => {
//     return (
//         <AppBar position="relative">
//             <Wrapper>
//                 <Left>
//                     <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>COD.ER $HO.P</Logo></Link>
//                 </Left>
//                 <Center>
//                     <Link to='/category/9' style={{textDecoration: "none", color: "white"}}><MenuItem>Sin Alcohol</MenuItem></Link>
//                     <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Vinos</MenuItem></Link>
//                     <Link to='/category/5' style={{textDecoration: "none", color: "white"}}><MenuItem>Licores</MenuItem></Link>                    
//                 </Center>
//                 <Right>
//                     <MenuItem>REGISTER</MenuItem>
//                     <MenuItem>SIGN IN</MenuItem>
//                     <MenuItem><CartWidget /></MenuItem>
//                 </Right>
//             </Wrapper>
//         </AppBar>
//     );
// }