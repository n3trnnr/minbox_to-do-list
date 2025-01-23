import { useState } from "react";
import Input from "../Input/Input";
import styles from './Main.module.scss'
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Todos from "../Todos/Todos";

export type TId = number | string;

export interface ITodo {
    id: TId,
    text: string,
    isCompleted: boolean
}

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

const Main = () => {
    const [todos, setTodos] = useState<ITodo[]>(initial)

    const count = todos.reduce((acc, item) => {
        if (!item.isCompleted) {
            acc++
        }
        return acc
    }, 0)

    const clearCompleted = () => {
        setTodos((todos) => {
            const filtered = todos.filter((todo) => {
                return todo.isCompleted !== true
            })
            return filtered
        })
    }

    return (
        <main className={styles['main']}>
            <Input />
            <Todos todos={todos} />
            <Navbar count={count} clearCompleted={clearCompleted} />
        </main>
    );
}

export default Main;