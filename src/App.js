import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Nav from './components/Nav'
import TablaCategoria from './components/TablaCategoria'
import CreateArticulo from './components/CreateArticulo'
import ListaArticulos from './components/ListaArticulos'
import Auth from './components/Auth/Auth'
import './App.css';

function App() {

  return (
    
    <Router>
      <Nav />
      <div className="font">
      <div className="container p-4">
        <Route path="/" exact component={ListaArticulos} />
        <Route path="/edit/:id" component={CreateArticulo}/>
        <Route path="/create" component={CreateArticulo} />
        <Route path="/categoria" component={TablaCategoria}/> 
        <Route path="/login" exact component={Auth} />
      </div>
      </div>
  </Router>
    
  );
}

export default App;
