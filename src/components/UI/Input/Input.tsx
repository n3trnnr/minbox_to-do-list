import { IInputProps } from "./IInput.props";
import styles from './Input.module.scss'
import Close from '../../../assets/close.svg?react';
import Button from "../Button/Button";
import { Controller, FieldValues } from "react-hook-form";

const Input = <T extends FieldValues>({ control, name }: IInputProps<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <label className={styles['label']}>
                    <input className={styles['input']} type="text" {...field} placeholder="What needs to be done?" />
                    <Button className={styles['close']}>
                        <Close />
                    </Button>
                </label >
            )} />
    )
}

export default Input;

