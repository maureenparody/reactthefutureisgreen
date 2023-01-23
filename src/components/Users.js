import React, {Component} from 'react';
import './Users.css';


class Users extends Component {
  
    //constructor(){
     //super(); //trae la lógica de Component
     // this.state = { valor: 1, color: 'rojo' }; 
   // }
  
    saludar() {
       alert ("Hola de vuelta para soy Users"); 
    }
    
    //incrementar = () => { this.setState({ valor: this.state.valor + 1, color: "verde" });  }
  
    render()
    {
        return (
        <div>
            <h2> Soy el User </h2>
        </div>
        );
    }
  }
  
  export default Users;
  