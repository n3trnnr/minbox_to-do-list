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
        case 'UPDATE': {

        }
        case 'CLEAR_COMPLETED': {
            const filteredTodos = state.todos.filter((todo) => {
                return todo.isCompleted !== true
            })
            return {
                ...state,
                todos: [...filteredTodos]
            }
        }
        default:
            return state;
    }
}