import React from 'react';
import Products from './Products'

import CartWidget from './CartWidget'

class SearchArea extends React.Component {
        constructor(props) {
            super(props);
            //Estado dentro de un componente de clase
            //Siemrpe los estados son objetos y tienen la propiedade keyword, que es la propiedad que voy a buscar
            //ese estado va a ir cambiando
            this.state = {
                keyword: '',
                cards:this.props.cards
            }

            this.submitHandler = this.submitHandler.bind(this)
        }

        //METODO SUBMITHANDLER, que es de la funcion del addEventListener
        submitHandler(e) {        
            e.preventDefault();
            console.log('searching...',this.state.keyword)
           let filterCards=this.props.cards.filter(
               card =>card.name.toLowerCase().includes(this.state.keyword.toLowerCase())
               );

                 
             this.setState({cards:filterCards})
        }


        //en el imput de mi formulario es dodne voy a usar el estado, 
        //ya que es dodne el usuario escribiria
        render(){
            return(
                <div className='searchArea'>
                    <form onSubmit={this.submitHandler}>

                        <label htmlFor='keyword'>


                        <input id='keyword'
                        value={this.state.keyword}
                         placeholder='SEARCH...'
                         onChange={(e) => this.setState({keyword: e.target.value})}>
                      
                         </input>

                        </label>
                      <CartWidget />
                    </form>


                    // {
                    //     this.state.cards.map((objeto,index) => (
                    //       <Products
                    //         key={index}
                    //         img={objeto.img}
                    //         name={objeto.name}
                    //         description={objeto.description}
                    //         stock={objeto.stock}
                    //         price={objeto.price}
                    //       />
                    //     ))
                  
                    }

      


                </div>
            )
        }
}

export  default SearchArea;