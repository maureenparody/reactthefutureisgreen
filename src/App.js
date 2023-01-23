
import './App.css';
//import PropTypes from 'prop-types';
//var PropTypes = require ('prop-types');
import {  Link , Router, Switch } from 'react-router-dom';
// para usar el router se hace <Router path="" component={} />
// en el caso del home <Link path="/" exact={true} component={Home} />

import Home from './components/Home';
import Products from './components/Products';
import Users from './components/Users';
import Categories from './components/Categories';
import Error404 from './components/Error404.js';

function App() {
  return (
    <div className="App">

      <Link to="/" exact={true}>Home</Link>
      <Link to="/products" exact={true}>Products</Link>
      <Link to="/users" exact={true} >Users</Link>
      <Link to="/cateogries" exact={true} >Categories</Link>
      
    <Switch>
      

      <Router path="/" exact={true} component={Home} />
      {/* <Router exact path="/"> <Home /> </Router>  es lo mismo q la linea de arriba*/}
      <Router path="/users" component={Users} />
      <Router path="/products"  component={Products} />
      <Router path="/categories" component={Categories} />
      <Router component={Error404} />

     </Switch>

    
    </div>
  );
}

export default App;
