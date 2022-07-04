import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem() {
  return (
    <div>
      <input type="checkbox" className="todo-checkbox" />
      <div className="todo-description">Play football</div>
      <div className="del-icon">
        <DeleteIcon />
      </div>
    </div>
  );
}

export default TodoItem;
