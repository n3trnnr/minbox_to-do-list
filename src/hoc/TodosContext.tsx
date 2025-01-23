import { createContext, useContext, useState } from "react";
import { ITodo } from "../interfaces/global";
import { IContextProviderProps } from "./IContextProvider.props";

const initial: ITodo[] = [
    {
        id: 1,
        text: 'todo 1',
        isCompleted: false
    },
    {
        id: 2,
        text: 'todo 2',
        isCompleted: true
    },
    {
        id: 3,
        text: 'todo 3',
        isCompleted: false
    },
]

interface ITodosContext {
    todos: ITodo[],
    clearCompleted: () => void
}

const TodosContext = createContext<ITodosContext | null>(null)

const ContextProvider = ({ children }: IContextProviderProps) => {
    const [todos, setTodos] = useState<ITodo[]>(initial)

    const handleSetTodos = () => { }
    const handeDeleteTodo = () => { }
    const handeUpdateTodo = () => { }
    const clearCompleted = () => {
        setTodos((todos) => {
            const filtered = todos.filter((todo) => {
                return todo.isCompleted !== true
            })
            return filtered
        })
    }

    return <TodosContext.Provider value={{ todos, clearCompleted }}>
        {children}
    </TodosContext.Provider>
}

export default ContextProvider

export const useTodosContext = () => {
    const context = useContext(TodosContext)
    if (context === null) {
        throw 'useTodosContext must be used within a TodosContext'
    } else {
        return context
    }
}