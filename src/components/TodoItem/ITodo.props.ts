import { TId } from "../../interfaces/global";

export interface ITodoProps {
    id: TId,
    text: string,
    isCompleted: boolean,
    handleDeleteTodo: (id: TId) => void
}