import React, {Component} from 'react';
import './Home.css';


class Home extends Component {
  
    //constructor(){
     //super(); //trae la lógica de Component
     // this.state = { valor: 1, color: 'rojo' }; 
   // }
  
    saludar() {
       alert ("Hola de vuelta para mundo"); 
    }
    
    //incrementar = () => { this.setState({ valor: this.state.valor + 1, color: "verde" });  }
  
    render()
    {
        return (
        <div>
            <h2> Soy el home </h2>
        </div>
        );
    }
  }
  
  export default Home;
  