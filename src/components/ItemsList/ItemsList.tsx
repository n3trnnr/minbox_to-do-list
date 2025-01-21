import TodoItem from '../TodoItem/TodoItem';
import styles from './ItemsList.module.scss';

const ItemsList = () => {
    return (
        <section className={styles['items-list']}>
            <div className={styles['items-list__inner']}>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </section>
    );
}

export default ItemsList;