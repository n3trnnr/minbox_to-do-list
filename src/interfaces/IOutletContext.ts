import { ITodo, TId } from "./global";

export interface IOutletContext {
    todos: ITodo[],
    handleDeleteTodo: (id: TId) => void,
    handleUpdateTodo: ({ id, text, isCompleted }: { id: TId, text?: string, isCompleted?: boolean }) => void
}