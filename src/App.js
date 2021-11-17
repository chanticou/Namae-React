// IMPORT CSS
import './App.css'

import NavBar from './NavBar';
import data from './data'
import Creditos from './Creditos';
import ItemListContainer from './ItemListContainer';
import Main from './Main'
import Promise from './Promise'
import SearchArea from './SearchArea'





function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer/>
    <Main city='SUSHI EN BUENOS AIRES' />
    <Main name='NAMAE' />
    <Main paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ullam odit aliquam sint reiciendis numquam nesciunt iste assumenda soluta, atque blanditiis accusantium doloremque tempore voluptatem. Recusandae minus officiis nulla? Error!' />

    <SearchArea  cards={data}/>

    

    <Creditos /> 
</>
  );
}

export default App;
