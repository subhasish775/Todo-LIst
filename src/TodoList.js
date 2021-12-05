import React from 'react';
import Todo from './Todo';
const TodoList = ({todos, setTodos, filteredTodos})=>{
    // const [todos, setTodos] = useState([]); we can write this here as we can use this to the Form as from lower level we can't go to the upper level
    //  like 'App.js' and Form.js etc then again  use it at TodoList and Todo
    console.log(todos);
return (
    <div className="todo-container">
        <ul className="todo-list">
        {filteredTodos.map((todo)=>(
            <Todo  
            key={todo.id} 
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            />
        ))}
        </ul>
    </div>
);
};

export default TodoList;

// todo is an array so if you want to send particular data to todo.js you need to  send the particular thing to todo like {todo.text}