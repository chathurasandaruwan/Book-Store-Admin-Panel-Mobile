import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Button from "../../../components/Button";


const AddBook = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        price: '',
        category: '',
        description: '',
        stock: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validateForm = () => {
        const requiredFields = ['title', 'author', 'price', 'category', 'description', 'stock'];
        for (const field of requiredFields) {
            if (!formData[field as keyof typeof formData]) {
                Alert.alert('Validation Error', `${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
                return false;
            }
        }

        if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0) {
            Alert.alert('Validation Error', 'Price must be a positive number');
            return false;
        }

        if (isNaN(parseInt(formData.stock)) || parseInt(formData.stock) < 0) {
            Alert.alert('Validation Error', 'Stock must be a non-negative number');
            return false;
        }

        return true;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            Alert.alert(
                'Success',
                'Book added successfully',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.goBack()
                    }
                ]
            );
        }, 1000);
    };

    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Add New Book</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Title *</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.title}
                        onChangeText={(value) => handleChange('title', value)}
                        placeholder="Enter book title"
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Author *</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.author}
                        onChangeText={(value) => handleChange('author', value)}
                        placeholder="Enter author name"
                    />
                </View>

                <View style={styles.row}>
                    <View style={[styles.formGroup, styles.halfWidth]}>
                        <Text style={styles.label}>Price ($) *</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.price}
                            onChangeText={(value) => handleChange('price', value)}
                            placeholder="0.00"
                            keyboardType="decimal-pad"
                        />
                    </View>

                    <View style={[styles.formGroup, styles.halfWidth]}>
                        <Text style={styles.label}>Stock *</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.stock}
                            onChangeText={(value) => handleChange('stock', value)}
                            placeholder="0"
                            keyboardType="number-pad"
                        />
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Category *</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.category}
                        onChangeText={(value) => handleChange('category', value)}
                        placeholder="Enter category"
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Description *</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={formData.description}
                        onChangeText={(value) => handleChange('description', value)}
                        placeholder="Enter book description"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>

                <View style={styles.actions}>
                    <Button
                        title="Cancel"
                        onPress={() => navigation.goBack()}
                        type="secondary"
                        style={styles.actionButton}
                    />
                    <Button
                        title="Add Book"
                        onPress={handleSubmit}
                        loading={loading}
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
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    textArea: {
        minHeight: 100,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfWidth: {
        width: '48%',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 40,
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 8,
    },
});

export default AddBook;