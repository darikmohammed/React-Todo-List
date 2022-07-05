import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem({
  checked, listDesc, onChange, click,
}) {
  return (
    <>
      <input
        type="checkbox"
        className="todo-checkbox"
        onChange={onChange}
        checked={checked}
      />
      <div className="todo-description">{listDesc}</div>
      <button type="button" className="del-icon" onClick={click}>
        <DeleteIcon />
      </button>
    </>
  );
}

export default TodoItem;
TodoItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  listDesc: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  click: PropTypes.func.isRequired,
};
