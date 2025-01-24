import Input from "../UI/Input/Input";
import styles from './Main.module.scss'
import Navbar from "../Navbar/Navbar";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useReducer } from "react";
import { initialState, todosReducer } from "../../todosReducer/todosReducer";
import { TId } from "../../interfaces/global";
import { Outlet } from "react-router-dom";

export interface IForm {
    text: string
}

const Main = () => {
    const [state, dispatch] = useReducer(todosReducer, initialState);

    useEffect(() => {
        dispatch({ type: 'GET' })
    }, [])

    const { control, handleSubmit, reset } = useForm<IForm>({
        mode: 'onChange',
        defaultValues: {
            text: ''
        }
    })

    const handleClearComleted = () => {
        const getChecked = state.todos.filter((todo) => {
            return todo.isCompleted
        })
        if (Boolean(getChecked.length)) {
            dispatch({ type: 'CLEAR_COMPLETED' })
        }
    }

    const handleDeleteTodo = (id: TId) => {
        if (id) {
            dispatch({ type: 'DELETE', payload: { id } })
        }
    }

    const handleUpdateTodo = ({ id, isCompleted }: { id: TId, isCompleted?: boolean }) => {
        dispatch({
            type: 'UPDATE', payload: {
                id: id,
                isCompleted: isCompleted
            }
        })
    }

    const resetForm = () => {
        reset()
    }

    const count = state.todos.reduce((acc, item) => {
        if (!item.isCompleted) {
            acc++
        }
        return acc
    }, 0)

    const onSubmit: SubmitHandler<IForm> = (data) => {
        dispatch({
            type: 'POST', payload: {
                text: data.text
            }
        })
        reset()
    }

    return (
        <main className={styles['main']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} name={'text'} resetForm={resetForm} />
            </form>
            <Outlet context={{ todos: state.todos, handleDeleteTodo, handleUpdateTodo }} />
            <Navbar count={count} handleClearComleted={handleClearComleted} />
        </main>
    );
}

export default Main;