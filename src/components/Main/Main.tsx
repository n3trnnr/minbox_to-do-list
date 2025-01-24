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
    console.log('re-render');
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

    const onSubmit: SubmitHandler<IForm> = (data) => {
        dispatch({ type: 'POST', payload: data })
        reset()
    }

    return (
        <main className={styles['main']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} name={'text'} />
            </form>
            <Outlet context={{ todos: state.todos, handleDeleteTodo }} />
            <Navbar todos={state.todos} handleClearComleted={handleClearComleted} />
        </main>
    );
}

export default Main;