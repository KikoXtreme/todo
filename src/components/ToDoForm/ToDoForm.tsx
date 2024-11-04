import { ChangeEvent, useState } from "react";
import ToDoList from "../ToDoList/ToDoList";

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
                <input type="text" value={value} onChange={handleClick}/>
                <button>ADD</button>
            </form>
            <ToDoList list={value}/>
        </div>
    )
}

export default ToDoForm