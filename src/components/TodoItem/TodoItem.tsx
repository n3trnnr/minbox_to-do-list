import { ITodo } from '../../interfaces/global';
import styles from './TodoItem.module.scss';

const TodoItem = ({ id, text, isCompleted }: ITodo) => {
    return (
        <div className={styles['todo-item']}>
            <div className={styles['todo-item__inner']}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default TodoItem;