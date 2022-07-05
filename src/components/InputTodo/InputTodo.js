import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';

function InputTodo({ submitList }) {
  return (
    <section id="todo-input">
      <form action="#" id="todo-input-form" onSubmit={submitList}>
        <input
          type="text"
          className="input-list"
          name="todo"
          placeholder="Add Todo List"
        />
        <button type="submit" className="btn">
          <AddIcon />
        </button>
      </form>
    </section>
  );
}

export default InputTodo;

InputTodo.propTypes = {
  submitList: PropTypes.func.isRequired,
};
