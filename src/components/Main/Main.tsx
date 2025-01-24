import Input from "../UI/Input/Input";
import styles from './Main.module.scss'
import Navbar from "../Navbar/Navbar";
import Todos from "../Todos/Todos";
import { useTodosContext } from "../../Context/TodosContext";

const Main = () => {
    const { todos } = useTodosContext();

    const count = todos.reduce((acc, item) => {
        if (!item.isCompleted) {
            acc++
        }
        return acc
    }, 0)

    console.log('re-render');

    return (
        <main className={styles['main']}>
            <Input />
            <Todos todos={todos} />
            <Navbar count={count} />
        </main>
    );
}

export default Main;