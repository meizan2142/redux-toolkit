import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim()) {
            dispatch(addTodo(input))
            setInput('')
        }
    }

    return (
        <div className="p-4">
            <form onSubmit={addTodoHandler} className="flex gap-2">
                <input
                    placeholder='Enter todo'
                    className='border p-2 flex-1 rounded'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <button 
                    type='submit'
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddTodo