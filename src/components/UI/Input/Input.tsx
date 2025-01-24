import { IInputProps } from "./IInput.props";
import styles from './Input.module.scss'
import Close from '../../../assets/close.svg?react';
import Button from "../Button/Button";

const Input = ({ ...props }: IInputProps) => {
    return (
        <label className={styles['label']}>
            <input className={styles['input']} type="text" {...props} placeholder="What needs to be done?" />
            <Button className={styles['close']}>
                <Close />
            </Button>
        </label >
    );
}

export default Input;