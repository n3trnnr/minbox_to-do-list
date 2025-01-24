export type TId = number | string;

export interface ITodo {
    id: TId,
    text: string,
    isCompleted: boolean,
}