import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import InputTodo from './components/InputTodo/InputTodo';
import NavBar from './components/NavBar/NavBar';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  // useEffect(() => {
  //   const list = JSON.toString(localStorage.getItem('Todo'));
  //   console.log(list);
  //   if (list) {
  //     setTodoList({ ...list });
  //   }
  // }, []);
  useEffect(() => {
    // Set to the local storage
    localStorage.setItem('Todo', JSON.stringify(todoList));
  }, [todoList]);

  const onChange = (event, key) => {
    todoList[key - 1].completed = !todoList[key - 1].completed;
    setTodoList([...todoList]);
  };
  const click = (event, key) => {
    console.log(event, key);
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
