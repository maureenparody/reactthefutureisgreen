import React, {Component} from 'react';
import './Products.css';


class Products extends Component {
  
    //constructor(){
     //super(); //trae la lógica de Component
     // this.state = { valor: 1, color: 'rojo' }; 
   // }
  
    saludar() {
       alert ("Hola de vuelta para soy Products"); 
    }
    
    //incrementar = () => { this.setState({ valor: this.state.valor + 1, color: "verde" });  }
  
    render()
    {
        return (
        <div>
            <h2> Soy el Product </h2>
        </div>
        );
    }
  }
  
  export default Products;
  