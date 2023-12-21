import React, { useState } from 'react';
import TablaDeTareas from './tablaDeTareas';
import { getItems } from '../getItem';

function  ListaDeTareas() {
  const [todos, setTodos] = useState(getItems());
  if (!todos) {
    return null;
  }
         const tareasAMostrar = todos.filter((todo) => todo.isCompleted)
  
   
     return (
      
        <div className='list'>
         <h1>Lista de Tareas añadidas: </h1>
         <h2>{tareasAMostrar.length}</h2>
         <ul>
        {tareasAMostrar.map((tarea) => (
          <li key={tarea.id}>{tarea.title}</li>
        ))}
      </ul>
   
        
        </div> 

     )
        }
        export default ListaDeTareas