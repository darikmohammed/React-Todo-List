import React from 'react';
import TodoItem from './TodoItem/TodoItem';

function TodoList() {
  return (
    <section id="todo-lists">
      <ul>
        <li>
          <TodoItem />
        </li>
      </ul>
    </section>
  );
}

export default TodoList;
