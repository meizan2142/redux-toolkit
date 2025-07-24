import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{ text: "Python", id: nanoid(), date: "7/20/2025 10:33 AM"}]
}

const date = new Date().toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
}).replace(',', '');

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                payload: action.payload,
                text: action.payload,
                date: date
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer