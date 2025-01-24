import { ITodo } from '../../interfaces/global';
import styles from './TodoItem.module.scss';
import Close from '../../assets/close.svg?react'
import Button from '../UI/Button/Button';

const TodoItem = ({ id, text, isCompleted }: ITodo) => {
    return (
        <div className={styles['todo-item']}>
            <div className={styles['todo-item__inner']}>
                <div className={styles['content']}>
                    <input className={styles['checkbox']} type="checkbox" name="" id="" />
                    <p className={styles['text']}>{text}</p>
                </div>

                <Button className={styles['btn-delete']}>
                    <Close />
                </Button>
            </div>
        </div>
    );
}

export default TodoItem;