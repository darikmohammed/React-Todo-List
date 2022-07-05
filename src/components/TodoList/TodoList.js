import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';

function TodoList({ todoList, onChange, click }) {
  return (
    <section id="todo-lists">
      <ul>
        <li>
          {todoList.map((list) => (
            <TodoItem
              listId={list.id}
              onChange={(event) => onChange(event, list.id)}
              key={list.id}
              listDesc={list.describition}
              checked={list.completed}
              click={(event) => click(event, list.id)}
            />
          ))}
        </li>
      </ul>
    </section>
  );
}

export default TodoList;
TodoList.propTypes = {
  todoList: PropTypes.isRequired,
  onChange: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};
