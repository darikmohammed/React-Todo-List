import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function InputTodo() {
  return (
    <section id="todo-input">
      <form action="#" id="todo-input-form">
        <input type="text" className="input-list" placeholder="Add Todo List" />
        <button type="submit" className="btn">
          <SearchIcon />
        </button>
      </form>
    </section>
  );
}

export default InputTodo;
