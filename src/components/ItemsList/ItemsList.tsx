import TodoItem from '../TodoItem/TodoItem';
import { IItemsListProps } from './IItemsList.props';
import styles from './ItemsList.module.scss';

const ItemsList = ({ todos }: IItemsListProps) => {
    return (
        <section className={styles['items-list']}>
            <div className={styles['items-list__inner']}>
                {todos && todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                    />
                ))}
            </div>
        </section>
    );
}

export default ItemsList;