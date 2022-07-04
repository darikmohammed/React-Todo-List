import React from 'react';
import Header from './components/Header/Header';
import InputTodo from './components/InputTodo/InputTodo';
import NavBar from './components/NavBar/NavBar';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
