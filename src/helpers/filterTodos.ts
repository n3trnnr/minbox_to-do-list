import { ITodo } from "../interfaces/global";

export const filterTodos = ({ type, todos }: { type: 'active' | 'completed', todos: ITodo[] }) => {
    if (type === 'active') {
        const filtered = todos.filter((todo) => {
            return !todo.isCompleted
        })
        return filtered
    } else if (type === 'completed') {
        const filtered = todos.filter((todo) => {
            return todo.isCompleted
        })
        return filtered
    }
    return []
}