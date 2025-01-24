import { useOutletContext } from "react-router-dom";
import ItemsList from "../components/ItemsList/ItemsList";
import { filterTodos } from "../helpers/filterTodos";
import { IOutletContext } from "../interfaces/IOutletContext";

const Active = () => {

    const { todos, handleDeleteTodo } = useOutletContext<IOutletContext>();
    const filteredTodos = filterTodos({ type: 'active', todos })

    return (
        <>
            <ItemsList todos={filteredTodos} handleDeleteTodo={handleDeleteTodo} />
        </>
    );
}

export default Active;