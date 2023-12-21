import { TbTrashOff } from "react-icons/tb";
import { getItems } from "../getItem";

import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import Input from "./Input";

function TablaDeTareas(){
    const [todos, setTodos] = useState(getItems());
  
    useEffect(() => {
   if(todos.length) window.localStorage.setItem("todo-list" , JSON.stringify(todos))
  }, [todos]);

    const handleAdd = (e) => { 
      e.preventDefault();
      if (e.target.input.value === "")return;
   
    const newTodo = {
      id: uuidv4(),
      title: e.target.input.value,
      isCompleted: false
    };
    e.target.reset();
    setTodos([
      ...todos,
      newTodo
    ]);
  };

  const handleStatusChange = (id) => {
    const modifiedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    setTodos([...modifiedTodos]);
  };
  const handleDeleteTodo = (id) => {
    const remainingTodos = todos.filter(todo => todo.id !== id);
    setTodos([...remainingTodos]);
  };
return(
    <main className="container">
  <Input onAdd={(e) => handleAdd(e)} />
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Título</th>
        <th>Estado</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      {todos && todos.map(todo => (
        <tr key={todo.id} className={todo.isCompleted ? "completed" : null}>
          <td>{todo.id.substring(0, 6)}</td>
          <td>{todo.title}</td>
          <td className="status" onClick={() => handleStatusChange(todo.id)}>{todo.isCompleted ? "hecho" : "pendiente"}</td>
          <td><TbTrashOff color='tomato' size={18} className='status'
            onClick={() => handleDeleteTodo(todo.id)}
          />
          </td>
        </tr>)
        
        
      )}
     
    </tbody>
  </table>
  
</main>
)}
export default TablaDeTareas