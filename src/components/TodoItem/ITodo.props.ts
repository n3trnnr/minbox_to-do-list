import { TId } from "../../interfaces/global";

export interface ITodoProps {
    id: TId,
    text: string,
    isCompleted: boolean,
    handleDeleteTodo: (id: TId) => void,
    handleUpdateTodo: ({ id, isCompleted }: { id: TId, isCompleted?: boolean }) => void
}