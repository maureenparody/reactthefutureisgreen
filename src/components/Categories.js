import React, {Component} from 'react';
import './Categories.css';


class Categories extends Component {
  
    //constructor(){
     //super(); //trae la lógica de Component
     // this.state = { valor: 1, color: 'rojo' }; 
   // }
  
    saludar() {
       alert ("Hola de vuelta para soy Categories"); 
    }
    
    //incrementar = () => { this.setState({ valor: this.state.valor + 1, color: "verde" });  }
  
    render()
    {
        return (
        <div>
            <h2> Soy el Categories </h2>
        </div>
        );
    }
  }
  
  export default Categories;
  