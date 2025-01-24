import { createContext, useContext, useState } from "react";
import { ITodo } from "../interfaces/global";
import { IContextProviderProps } from "./IContextProvider.props";

const initial: ITodo[] = [
    {
        id: 1,
        text: 'lorem loremloremloremloremloremloremloremloremlorem',
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
    {
        id: 4,
        text: 'todo 3',
        isCompleted: false
    },
    {
        id: 5,
        text: 'todo 3',
        isCompleted: false
    },
    {
        id: 6,
        text: 'todo 3',
        isCompleted: false
    },
    {
        id: 7,
        text: 'todo 3',
        isCompleted: false
    },
    {
        id: 8,
        text: 'todo 3',
        isCompleted: false
    },
    {
        id: 9,
        text: 'todo 3',
        isCompleted: false
    },
    {
        id: 10,
        text: 'todo 3',
        isCompleted: false
    },
    {
        id: 11,
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