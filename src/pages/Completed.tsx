import { useOutletContext } from "react-router-dom";
import ItemsList from "../components/ItemsList/ItemsList";
import { filterTodos } from "../helpers/filterTodos";
import { IOutletContext } from "../interfaces/IOutletContext";

const Completed = () => {
    const { todos, handleDeleteTodo, handleUpdateTodo } = useOutletContext<IOutletContext>();
    const filteredTodos = filterTodos({ type: 'completed', todos })

    return (
        <>
            <ItemsList todos={filteredTodos} handleDeleteTodo={handleDeleteTodo} handleUpdateTodo={handleUpdateTodo} />
        </>
    );
}

export default Completed;