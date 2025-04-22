import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {
    const [todos, setTodos] = useState([
        { content: "停車費", id: Math.random(), isComleted: false },
        { content: "對發票", id: Math.random(), isComleted: false },
    ])
    //建立新的todo內容函式
    //其餘運算子(...名稱)
    const addTodo = (newContent) => {
        setTodos([...todos, { content: newContent, id: Math.random(), isComleted: false }])
    }

    //建立刪除todo函示
    //傳入被刪除的id
    const delTodo = (id) => {
        //使用fiflter方法保留不被刪除的id
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }
    //切換是否被點擊的狀態，更改原本isComleted值
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, isComleted: !todo.isComleted } : todo
        }))
    }
    return (
        <div className="wrapper">
            <h1>待辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted} />
                }
                )
            }
        </div>
    )
} export default TodoWrapper     