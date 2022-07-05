import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem/TodoItem';

function TodoList() {
  const [todoList, setTodoList] = useState([
    { id: 1, describition: 'list One', completed: true },
  ]);
  // setTodoList([{ id: 1, describition: 'list One' }]);
  useEffect(() => {
    // Set to the local storage
  });
  // }, [todoList]);

  const onChange = (event, key) => {
    todoList[key - 1].completed = !todoList[key - 1].completed;
    setTodoList([...todoList]);
  };
  const click = (event, key) => {
    console.log(event, key);
  };
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
