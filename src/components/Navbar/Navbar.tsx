import styles from './Navbar.module.scss';
import cn from 'classnames'
import { NavLink } from 'react-router-dom';
import { INavbarProps } from './INavbar.props';

const Navbar = ({ count, clearCompleted }: INavbarProps) => {

    return (
        <nav className={styles['nav']}>
            <div>{count} items left</div>
            <ul className={styles['nav-list']}>
                <li>
                    <NavLink to={'/all'} className={({ isActive }) => cn(styles['nav-item'], {
                        [styles['nav-item__active']]: isActive
                    })}>
                        All
                        <div className={styles['line']} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/active'} className={({ isActive }) => cn(styles['nav-item'], {
                        [styles['nav-item__active']]: isActive
                    })}>
                        Active
                        <div className={styles['line']} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/completed'} className={({ isActive }) => cn(styles['nav-item'], {
                        [styles['nav-item__active']]: isActive
                    })}>
                        Completed
                        <div className={styles['line']} />
                    </NavLink>
                </li>
            </ul>
            <button
                className={styles['btn-delete']}
                onClick={clearCompleted}
            >
                Clear completed
            </button>
        </nav>
    );
}

export default Navbar;