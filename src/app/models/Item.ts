import { IItems } from './Items';

export interface IItem {
    id: number;
    label: string;
    decorator: string;
    items: IItems[];
}
