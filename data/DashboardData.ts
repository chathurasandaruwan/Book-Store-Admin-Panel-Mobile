import {books} from "./bookData";
import {orders} from "./orderData";

export const dashboardStats = {
    totalBooks: books.length,
    totalOrders: orders.length,
    pendingOrders: orders.filter(order => order.status === 'pending').length,
    revenue: orders.reduce((sum, order) => sum + 100, 0),
    lowStockBooks: books.filter(book => book.stock < 10).length
};