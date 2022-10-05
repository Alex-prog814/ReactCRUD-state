import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import EditTodo from './components/EditTodo/EditTodo';

function App(){
  let [todos, setTodos] = useState([]);
  let [editedObj, setEditedObj] = useState(null);

  function addTask(newObj){
    let newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
    // console.log(todos);
  };

  function changeStatus(id){
    const newTodos = todos.map(item => {
      if(item.id === id){
        item.status = !item.status;
      };
      return item;
    });
    setTodos(newTodos);
  };

  function deleteTask(id){
    let newTodos = [...todos];
    newTodos = newTodos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  function getEditedObj(id){
    let oneObj = todos.find(item => item.id === id);
    setEditedObj(oneObj);
    // console.log(oneObj);
  };

  function saveChanges(newObj){
    let newTodos = [...todos];
    newTodos = newTodos.map(item => {
      if(item.id === newObj.id){
        return newObj;
      }else{
        return item;
      };
    });
    setTodos(newTodos);
    setEditedObj(null);
  };

  return (
    <>
      <h1>TODO CRUD</h1>
      <AddTodo addTask={addTask} />
      <TodoList todos={todos} changeStatus={changeStatus} deleteTask={deleteTask} getEditedObj={getEditedObj} />
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
      ) : (
        <h4>Not editing todo now</h4>
      )}
    </>
  )
};

export default App;