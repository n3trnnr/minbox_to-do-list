import { TId } from "../../interfaces/global";

export interface ITodoProps {
    id: TId,
    text: string,
    isCompleted: boolean,
    handleDeleteTodo: (id: TId) => void,
    handleUpdateTodo: ({ id, text, isCompleted }: { id: TId, text?: string, isCompleted?: boolean }) => void
}