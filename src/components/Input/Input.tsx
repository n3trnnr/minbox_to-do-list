import { IInputProps } from "./IInput.props";
import styles from './Input.module.scss'

const Input = ({ ...props }: IInputProps) => {
    return (
        <label className={styles['label']}>
            <input className={styles['input']} type="text" {...props} placeholder="What needs to be done?" />
        </label>
    );
}

export default Input;