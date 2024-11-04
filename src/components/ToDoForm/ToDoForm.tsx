import { ChangeEvent, useState } from "react";
import ToDoList from "../ToDoList/ToDoList";
import '../../css/todoForm.css';

const ToDoForm = () => {

    const [value, setValue] = useState('');

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setValue(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className="todoForm" >
            <form>
                <input id="todo-input" type="text" value={value} placeholder="To-Do Items" onChange={handleClick} />
                <button className="add-button">ADD</button>
            </form>
            <ToDoList list={value} />
        </div>
    )
}

export default ToDoForm