import { useOutletContext } from "react-router-dom";
import ItemsList from "../components/ItemsList/ItemsList";
import { IOutletContext } from "../interfaces/IOutletContext";

const All = () => {
    const { todos, handleDeleteTodo, handleUpdateTodo } = useOutletContext<IOutletContext>()
    return (
        <>
            <ItemsList todos={todos} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />
        </>
    );
}

export default All;