import React from 'react';
import './Components/style.css';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
  <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
      
      
    </>
  );
}

export default App;
