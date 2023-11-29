import { Router, Response, Request} from 'express';
import { Book } from '../models/book';

const router = Router();
let books: Book[] = [];

router.get('/', (req: Request, res: Response) => {
    res.json(books);
});

router.get('/:id', (req: Request, res: Response) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    res.json(book);
});

router.put('/', (req: Request, res: Response) => {
    const book: Book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        status: req.body.status,
        rating: req.body.rating
    };

    books.push(book);
    res.status(201).json(book);
});

// delete book
router.delete('/:id', (req: Request, res: Response) => {
    const index = books.findIndex((book) => book.id === parseInt(req.params.id));

    if (index === -1) {
        res.status(404).send('Book not found');
    }
    else {
        books.splice(index, 1);
        res.status(204).send();
    }
});

// update a book

export default router;
