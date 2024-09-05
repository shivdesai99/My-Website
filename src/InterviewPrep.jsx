import React, { useState } from 'react';
import './InterviewPrep.css';

const InterviewPrep = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);  // Tracks which to-do is being edited
    const [editingValue, setEditingValue] = useState("");    // Tracks the value of the to-do being edited

    const addTodo = () => {
        if (input) {
            setTodos([...todos, input]);
            setInput("");
        }
    };

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleDelete = (i) => {
        setTodos(todos.filter((_, index) => i !== index));
    };

    const handleEdit = (i) => {
        // If already editing, save changes
        if (editingIndex === i) {
            const updatedTodos = [...todos];
            updatedTodos[i] = editingValue;  // Save the new value
            setTodos(updatedTodos);
            setEditingIndex(null);  // Exit edit mode
            setEditingValue("");    // Clear the edit value
        } else {
            setEditingIndex(i);      // Set current index in edit mode
            setEditingValue(todos[i]);  // Set the current to-do's value in the input field
        }
    };

    const handleEditInputChange = (e) => {
        setEditingValue(e.target.value);
    };

    return (
        <div className="workspace">
            <h1>To-Do List App</h1>
            <div className="inputForm">
                <input type="text" onChange={handleInput} value={input} />
                <button onClick={addTodo}>Add To-Do</button>
            </div>
            <ul className='toDoItem'>
                {todos.map((todo, i) => (
                    <li key={i}>
                        {editingIndex === i ? (
                            // Show input field if currently editing this item
                            <input 
                                type="text" 
                                value={editingValue} 
                                onChange={handleEditInputChange} 
                            />
                        ) : (
                            // Show the to-do item normally if not editing
                            <p className="toDoName">{todo}</p>
                        )}
                        {/* Toggle between Edit and Done */}
                        <button onClick={() => handleEdit(i)}>
                            {editingIndex === i ? "Done" : "Edit"}
                        </button>
                        <button onClick={() => handleDelete(i)}>Delete</button>
                        <input type="checkbox" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InterviewPrep;