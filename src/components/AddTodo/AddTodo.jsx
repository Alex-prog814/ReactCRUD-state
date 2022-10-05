import React, { useState } from 'react';

const AddTodo = (props) => {
    const [task, setTask] = useState('');

    function handleInput(e){
        setTask(e.target.value);
        // console.log(task);
    };

    const handleAdd = () => {
        if(!task){
            alert('Input is empty!');
            return;
        };

        const newTask = {
            task: task,
            status: false,
            id: Date.now()
        };

        props.addTask(newTask);

        setTask('');
    };

  return (
    <div>
        <h2>Add TODO Component</h2>
        <input type="text" onChange={handleInput} value={task} />
        <button onClick={handleAdd}>Add Task</button>
    </div>
  )
};

export default AddTodo;