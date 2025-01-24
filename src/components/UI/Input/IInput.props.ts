import { Control, FieldValues, Path } from "react-hook-form";

export interface IInputProps<T extends FieldValues> {
    control: Control<T>,
    name: Path<T>
}