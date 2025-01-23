import { Outlet } from "react-router-dom";
import { ITodosProps } from "./ITodos.props";

const Todos = ({ todos }: ITodosProps) => {
    console.log(todos);

    return <Outlet context={todos} />
}

export default Todos;