import React from 'react';

const Todo = ({todo, remove}) => {
    //Each Todo
    return(<li onClick={() => (remove(todo.id))}> {todo.text} </li>)
}

export const TodoList = ({todos, remove}) => {
    //Map through the todos
    const todoNode = todos.map((todo) => {
        return(<Todo todo={todo} key={todo.id} remove={remove}/>)
    })
    return (<ul>{todoNode}</ul>)
}