import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.css'

//Componentes
import Home from './components/Home'
import Guia from './components/Guia/Guia'
import Pregunta from './components/Guia/Pregunta'

function App() {

  const [tipo,updateTipo] = useState('');

  const handleTipo = inputTipo => {
    updateTipo(inputTipo)
  }
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/guia' component={Guia} />
        <Route exact path='/guia/pregunta1' render={()=>{<Pregunta selectTipo={handleTipo}/>}}/>
      </Switch>
    </Router>
  );
}

export default App;
