import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {BookType} from "../interface/BookType";


interface BookCardProps {
    book: BookType;
    onPress: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: book.coverImage }} style={styles.cover} />
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.price}>${book.price.toFixed(2)}</Text>
                    <Text style={[styles.stock, book.stock < 10 ? styles.lowStock : null]}>
                        Stock: {book.stock}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cover: {
        width: 80,
        height: 120,
    },
    details: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    author: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0066CC',
    },
    stock: {
        fontSize: 14,
        color: '#666',
    },
    lowStock: {
        color: '#FF3B30',
    },
});

export default BookCard;