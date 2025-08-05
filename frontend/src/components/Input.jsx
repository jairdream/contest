import React, { useContext, useRef, useState } from 'react';
import AuthContext from '../context/AuthContext';
import TodosContext from '../context/TodosContext';

function Input() {

    const [todo, setTodo] = useState("");
    const input = useRef("");

    const {dispatch} = useContext(TodosContext);

    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        // TODO: Implement this function
        // This function should:
        // 1. Prevent default form submission
        // 2. Make a POST request to create a new todo
        // 3. Handle the response and update the state
        // 4. Clear the input field on success
    }

    return (
        <form className='input' onSubmit={handleSubmit}>
            <input ref={input} type="text" placeholder='Enter a task...' value={todo} 
                onChange={e => setTodo(e.target.value)} 
            />
            <button>Go</button>
        </form>
    );
}

export default Input;