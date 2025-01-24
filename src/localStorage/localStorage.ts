import { ITodo } from "../interfaces/global";

export const getState = (): ITodo[] => {
    const todos = localStorage.getItem('todos');
    if (todos) {
        return JSON.parse(todos)
    }
    return []
}

export const setState = (data: ITodo[]) => {

    if (data) {
        localStorage.setItem('todos', JSON.stringify(data))
    }
}