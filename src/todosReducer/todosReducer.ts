import { ITodo, TId } from "../interfaces/global";
import { getState, setState } from "../localStorage/localStorage";

interface IInitialState {
    todos: ITodo[]
}

export const initialState: IInitialState = {
    todos: []
};

interface IAction {
    type: 'GET' | 'POST' | 'UPDATE' | 'DELETE' | 'CLEAR_COMPLETED';
    payload?: {
        text?: string,
        isCompleted?: boolean
        id?: TId
    }
}

export const todosReducer = (state: IInitialState, action: IAction): IInitialState => {
    switch (action.type) {
        case 'GET': {
            const todos = getState();
            return {
                ...state,
                todos: todos
            }
        }

        case 'POST': {
            if (action.payload && action.payload.text) {
                const newTodo: ITodo = {
                    id: state.todos.length + 1,
                    text: action.payload.text,
                    isCompleted: false
                }

                const data = {
                    ...state,
                    todos: [newTodo, ...state.todos]
                }
                setState(data.todos)
                return data
            }
            return state
        }

        case 'UPDATE': {
            if (action.payload && action.payload.id) {
                const id = action.payload.id

                const updatedTodo = state.todos.map((todo) => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            isCompleted: action.payload?.isCompleted ?? todo.isCompleted,
                        }
                    }
                    return todo
                })

                const data = {
                    ...state,
                    todos: [...updatedTodo]
                }
                setState(data.todos)
                return data
            }
            return state
        }

        case 'CLEAR_COMPLETED': {
            const filteredTodos = state.todos.filter((todo) => {
                return todo.isCompleted !== true
            })

            const data = {
                ...state,
                todos: [...filteredTodos]
            }
            setState(data.todos)
            return data
        }

        case 'DELETE': {
            if (action.payload && action.payload.id) {
                const id = action.payload.id
                const filteredData = state.todos.filter((todo) => {
                    return todo.id !== id
                })

                const data = {
                    ...state,
                    todos: [...filteredData]
                }
                setState(data.todos)
                return data
            }
            return state
        }

        default:
            return state;
    }
}