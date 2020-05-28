import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.css'

//Componentes
import Home from './components/Home'
import Guia from './components/Guia/Guia'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/guia' component={Guia} />
      </Switch>
    </Router>
  );
}

export default App;
