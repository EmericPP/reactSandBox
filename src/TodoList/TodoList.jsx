// @flow
import React, {useState} from 'react'
import {TodoItem} from './Components/TodoItem'
import {SubmitText} from '../GenericComponents/SubmitText/SubmitText'

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inputTaskValue, setInputTaskValue] = useState('')

    return (
        <section className="todo-list">
            <div className="todo-list__add-item">
                <SubmitText
                    handleInputSubmit={() => {
                        if (todos.some((task) => task.title === inputTaskValue) || !inputTaskValue) return
                        setTodos([...todos, {title: inputTaskValue}])
                        setInputTaskValue('')
                    }}
                    handleInputChange={({target}: SyntheticInputEvent<HTMLInputElement>) => {
                        setInputTaskValue(target.value)
                    }}
                    value={inputTaskValue}
                />
            </div>
            <ul className="todo-list__items-list">
                {todos.map((todo) => (
                    <li key={todo.title} className="todo-list__item">
                        <TodoItem
                            handleDeleteTask={() => {
                                setTodos(todos.filter((item) => item.title !== todo.title))
                            }}
                            title={todo.title}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
