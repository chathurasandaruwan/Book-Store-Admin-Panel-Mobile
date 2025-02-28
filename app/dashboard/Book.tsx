import React from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import BookCard from "../../components/BookCard";
import Button from "../../components/Button";
import {books} from "../../data/bookData";
import {BookType} from "../../interface/BookType";

const Book = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigation = useNavigation();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleBookPress = (book: BookType) => {

    };

    const handleAddBook = () => {

    };
    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search books..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {searchQuery ? (
                        <Ionicons
                            name="close"
                            size={20}
                            color="#999"
                            style={styles.clearIcon}
                            onPress={() => setSearchQuery('')}
                        />
                    ) : null}
                </View>
                <Button
                    title="Add Book"
                    onPress={handleAddBook}
                    style={styles.addButton}
                />
            </View>

            <FlatList
                data={filteredBooks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <BookCard book={item} onPress={() => handleBookPress(item)} />
                )}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingBottom: 8,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 10,
        height: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    clearIcon: {
        padding: 4,
    },
    addButton: {
        height: 40,
        paddingHorizontal: 12,
    },
    listContent: {
        padding: 16,
    },
});
export default Book;