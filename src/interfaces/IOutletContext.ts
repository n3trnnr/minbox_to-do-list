import { ITodo, TId } from "./global";

export interface IOutletContext {
    todos: ITodo[],
    handleDeleteTodo: (id: TId) => void
}