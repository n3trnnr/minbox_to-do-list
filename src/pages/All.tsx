import { useOutletContext } from "react-router-dom";
import ItemsList from "../components/ItemsList/ItemsList";
import { ITodo } from "../interfaces/global";

const All = () => {

    const todos = useOutletContext<ITodo[]>()

    return (
        <>
            <ItemsList todos={todos} />
        </>
    );
}

export default All;