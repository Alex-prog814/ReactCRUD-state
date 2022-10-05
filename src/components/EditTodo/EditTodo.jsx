import React, { useState } from 'react';

const EditTodo = ({ editedObj, saveChanges }) => {
    const [editedTodo, setEditedTodo] = useState(editedObj);

    function editTodo(e){
        setEditedTodo({
            ...editedTodo,
            task: e.target.value
        });
    };

    function handleSaveChanges(){
        saveChanges(editedTodo);
    };

  return (
    <div>
        <h2>Edit TODO Component</h2>
        <input type="text" onChange={editTodo} value={editedTodo.task} />
        <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  )
};

export default EditTodo;