import {OrderType} from "../interface/OrderType";

export const orders: OrderType[] = [
    {
        id: '1',
        user_id: 'U00-0001',
        date: '2023-05-15',
        status: 'complete',
        books: [
            {
                bookId: '1',
                quantity: 1,
                price: 12.99
            },
            {
                bookId: '3',
                quantity: 1,
                price: 24.99
            }
        ],
    },
    {
        id: '2',
        user_id: 'U00-0002',
        date: '2023-05-18',
        status: 'complete',
        books: [
            {
                bookId: '2',
                quantity: 1,
                price: 14.99
            }
        ],
    },
    {
        id: '3',
        user_id: 'U00-0001',
        date: '2023-05-20',
        status: 'pending',
        books: [
            {
                bookId: '4',
                quantity: 2,
                price: 19.99
            },
            {
                bookId: '5',
                quantity: 1,
                price: 16.99
            }
        ],
    },
    {
        id: '4',
        user_id: 'U00-0001',
        date: '2023-05-22',
        status: 'pending',
        books: [
            {
                bookId: '1',
                quantity: 1,
                price: 12.99
            }
        ],
    }
];