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

    const handleUpdateTodo = ({ id, text, isCompleted }: { id: TId, text?: string, isCompleted?: boolean }) => {
        console.log(id, text, isCompleted);

        dispatch({
            type: 'UPDATE', payload: {
                id: id,
                text: text,
                isCompleted: isCompleted
            }
        })
    }

    const resetForm = () => {
        reset()
    }

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log(data);

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
            <Navbar todos={state.todos} handleClearComleted={handleClearComleted} />
        </main>
    );
}

export default Main;