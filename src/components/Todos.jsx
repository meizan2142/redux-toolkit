import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
    const todos = useSelector((state) => state.todos) // Changed from state.counter.value to state.todos
    const dispatch = useDispatch()
    
    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full shadow-md border border-gray-100 my-2">
                <thead>
                    <tr className="bg-[#333333] text-white">
                        <th className="py-3 px-6 text-left border-b">Serial</th>
                        <th className="py-3 px-6 text-left border-b">Date</th>
                        <th className="py-3 px-6 text-left border-b">Name</th>
                        <th className="py-3 px-6 border-b text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => ( // Added index parameter for serial number
                        <tr key={todo.id}>
                            <td className="py-4 px-6 border-b">{index + 1}</td>
                            <td className="py-4 px-6 border-b">
                                {todo.date || "N/A"}
                            </td>
                            <td className="py-4 px-6 border-b">{todo.title || todo.text}</td>
                            <td className="py-4 px-6 border-b text-center">
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Todos