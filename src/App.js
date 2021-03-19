import React from 'react';
import Food from './Food';
import FoodNav from './FoodNav';

import { Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
      <FoodNav />
        <Route path="/food/:name">
          <Food />
        </Route>

    </div>
  );
}

export default App;
