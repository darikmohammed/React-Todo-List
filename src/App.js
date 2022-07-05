import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import InputTodo from './components/InputTodo/InputTodo';
import NavBar from './components/NavBar/NavBar';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const getTodolist = () => {
    const localVar = JSON.parse(localStorage.getItem('Todo'));
    if (!localVar) {
      return [];
    }
    return localVar;
  };
  const [todoList, setTodoList] = useState(getTodolist());
  useEffect(() => {
    // Set to the local storage
    const locaVar = JSON.stringify(todoList);
    localStorage.setItem('Todo', locaVar);
  }, [todoList]);

  const onChange = (event, key) => {
    todoList[key - 1].completed = !todoList[key - 1].completed;
    setTodoList([...todoList]);
  };
  const click = () => {
    // console.log(event, key);
  };

  const submitList = (e) => {
    e.preventDefault();
    const newList = {
      id: todoList.length + 1,
      describition: e.target.elements.todo.value,
      completed: false,
    };
    todoList.push(newList);
    setTodoList([...todoList]);
    e.target.elements.todo.value = '';
  };
  return (
    <div className="app-container">
      <NavBar />
      <Header />
      <InputTodo submitList={submitList} />
      <TodoList todoList={todoList} onChange={onChange} click={click} />
    </div>
  );
}

export default App;
