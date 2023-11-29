import { Status } from './status';

export interface Book {
    id: number,
    title: string,
    author: string,
    status: Status,
    rating: number,
};