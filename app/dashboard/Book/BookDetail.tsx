import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {books} from "../../../data/bookData";
import Button from "../../../components/Button";

type RouteParams = {
    bookId: string;
};

const BookDetail = () => {
    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    const navigation = useNavigation();
    const { bookId } = route.params;

    const book = books.find(b => b.id === bookId);

    if (!book) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Book not found</Text>
                    <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
            </SafeAreaView>
        );
    }

    const handleEdit = () => {
        // Navigate to edit screen (not implemented in this example)
        Alert.alert('Edit Book', 'Edit functionality would be implemented here');
    };

    const handleDelete = () => {
        Alert.alert(
            'Delete Book',
            'Are you sure you want to delete this book?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        // Delete logic would be implemented here
                        Alert.alert('Book Deleted', 'The book has been deleted successfully');
                        navigation.goBack();
                    }
                }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Image source={{ uri: book.coverImage }} style={styles.cover} />
                    <View style={styles.headerInfo}>
                        <Text style={styles.title}>{book.title}</Text>
                        <Text style={styles.author}>by {book.author}</Text>
                        <Text style={styles.price}>${book.price.toFixed(2)}</Text>

                        <View style={styles.stockContainer}>
                            <Icon
                                name={book.stock < 10 ? "error-outline" : "check-circle-outline"}
                                size={16}
                                color={book.stock < 10 ? "#FF3B30" : "#34C759"}
                            />
                            <Text
                                style={[
                                    styles.stockText,
                                    book.stock < 10 ? styles.lowStock : styles.inStock
                                ]}
                            >
                                {book.stock < 10 ? `Low Stock: ${book.stock}` : `In Stock: ${book.stock}`}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{book.description}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Details</Text>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Category</Text>
                        <Text style={styles.detailValue}>{book.category}</Text>
                    </View>
                </View>

                <View style={styles.actions}>
                    <Button
                        title="Edit Book"
                        onPress={handleEdit}
                        type="primary"
                        style={styles.actionButton}
                    />
                    <Button
                        title="Delete Book"
                        onPress={handleDelete}
                        type="danger"
                        style={styles.actionButton}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#FF3B30',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
    },
    cover: {
        width: 120,
        height: 180,
        borderRadius: 8,
    },
    headerInfo: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    author: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0066CC',
        marginBottom: 8,
    },
    stockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stockText: {
        marginLeft: 4,
        fontSize: 14,
    },
    inStock: {
        color: '#34C759',
    },
    lowStock: {
        color: '#FF3B30',
    },
    section: {
        backgroundColor: 'white',
        padding: 16,
        marginTop: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    detailLabel: {
        fontSize: 16,
        color: '#666',
    },
    detailValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom: 20,
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 8,
    },
});

export default BookDetail;