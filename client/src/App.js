import React from 'react';
import {Router} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import Show from './views/Show';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex col-6 mx-auto justify-content-around flex-wrap" >
        <h1>Pet Shelter</h1>
      </div>
      <Router>
      <Main path="/" />
        <Create path="/pets/new" />
        <Show path="/pets/:id" />
        <Edit path="pets/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
