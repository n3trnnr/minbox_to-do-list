import styles from './TodoItem.module.scss';
import Close from '../../assets/close.svg?react'
import Button from '../UI/Button/Button';
import { ITodoProps } from './ITodo.props';

const TodoItem = ({ id, text, isCompleted, handleDeleteTodo }: ITodoProps) => {
    return (
        <div className={styles['todo-item']}>
            <div className={styles['todo-item__inner']}>
                <div className={styles['content']}>
                    <input className={styles['checkbox']} type="checkbox" defaultChecked={isCompleted} />
                    <p className={styles['text']}>{text}</p>
                </div>

                <Button className={styles['btn-delete']} onClick={() => handleDeleteTodo(id)}>
                    <Close />
                </Button>
            </div>
        </div>
    );
}

export default TodoItem;