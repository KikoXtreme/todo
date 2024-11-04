const ToDoList = (list: any) => {
    console.log('list: ', list.list)
    return (
        <div className="todoList">
            {list.list}
        </div>
    )
}

export default ToDoList;