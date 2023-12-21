
import  './App.css';
import { getItems } from './getItem';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ListaDeTareas from './components/ListaDeTareas';
import TablaDeTareas from './components/tablaDeTareas';
import React, { useState } from 'react';
function App() {
 
  const [todos, setTodos] = useState(getItems());
  
 
  return (
    <BrowserRouter>
    <main className="principal">
      <header>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/ListaDeTareas">Lista De Tareas Realizadas</Link>
          <Link to="/TablaDeTareas">Tabla De Tareas</Link>
        </nav>
        <h1>Lista de tareas</h1>
      </ header>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path='/TablaDeTareas' element={<TablaDeTareas todos={todos} setTodos={setTodos} />}/>
        <Route path="/ListaDeTareas" element={<ListaDeTareas todos={todos}/>} />
   </Routes>
   
     <footer>
              Gracias por visitar esta pagina.
          </footer> 
          </main>
          
          </BrowserRouter>
  );
}

export default App;
