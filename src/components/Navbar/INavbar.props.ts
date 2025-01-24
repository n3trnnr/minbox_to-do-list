import { ITodo } from "../../interfaces/global";

export interface INavbarProps {
    todos: ITodo[],
    handleClearComleted: () => void
}