import { useOutletContext } from "react-router-dom";
import ItemsList from "../components/ItemsList/ItemsList";
import { ITodo } from "../interfaces/global";
import { IOutletContext } from "../interfaces/IOutletContext";


const All = () => {

    const { todos, handleDeleteTodo } = useOutletContext<IOutletContext>()

    return (
        <>
            <ItemsList todos={todos} handleDeleteTodo={handleDeleteTodo} />
        </>
    );
}

export default All;