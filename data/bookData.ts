import {BookType} from "../interface/BookType";

export const books: BookType[] = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 12.99,
        category: 'Fiction',
        description: 'A classic novel about the American Dream set in the Jazz Age.',
        coverImage: '../../assets/testImg.jpg',
        stock: 25,
    },
    {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 14.99,
        category: 'Fiction',
        description: 'A novel about racial injustice and moral growth in the American South.',
        coverImage: 'https://source.unsplash.com/random/400x600/?book,classic',
        stock: 18,
    },
    {
        id: '3',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        price: 24.99,
        category: 'Non-Fiction',
        description: 'A book exploring the history and impact of Homo sapiens.',
        coverImage: 'https://source.unsplash.com/random/400x600/?book,history',
        stock: 12,
    },
    {
        id: '4',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 19.99,
        category: 'Fantasy',
        description: 'A fantasy novel about the adventures of Bilbo Baggins.',
        coverImage: 'https://source.unsplash.com/random/400x600/?book,fantasy',
        stock: 7,
    },
    {
        id: '5',
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 16.99,
        category: 'Self-Help',
        description: 'A guide to building good habits and breaking bad ones.',
        coverImage: 'https://source.unsplash.com/random/400x600/?book,habits',
        stock: 30,
    }
];