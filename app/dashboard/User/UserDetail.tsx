import {Alert, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {books} from "../../../data/bookData";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import {users} from "../../../data/UserData";

type RouteParams = {
    userId: string;
};

const UserDetail = () => {
    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    const navigation = useNavigation();
    const { userId } = route.params;

    const user = users.find(u => u.id === userId);

    if (!user) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>User not found</Text>
                    <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
            </SafeAreaView>
        );
    }

    const handleEdit = () => {
        // Navigate to edit screen (not implemented in this example)
        Alert.alert('Edit User', 'Edit functionality would be implemented here');
    };

    const handleDelete = () => {
        Alert.alert(
            'Delete User',
            'Are you sure you want to delete this user?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        // Delete logic would be implemented here
                        Alert.alert('User Deleted', 'The user has been deleted successfully');
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
                    <View style={styles.headerInfo}>
                        <Text style={styles.title}>Name: {user.name}</Text>
                        <Text style={styles.userId}>Id:  {user.id}</Text>

                        <View style={styles.statusContainer}>
                            <Text
                                style={[
                                    styles.statusText,
                                    user.status === 'inactive' ? styles.statusInActive : styles.statusActive
                                ]}
                            >
                                {user.status}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>User Email :</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailValue}>{}</Text>
                        <Text style={styles.detailValue}>{user.role}</Text>
                    </View>
                </View>

                <View style={styles.actions}>
                    <Button
                        title="Edit User"
                        onPress={handleEdit}
                        type="primary"
                        style={styles.actionButton}
                    />
                    <Button
                        title="Delete User"
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
    userId: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        marginLeft: 4,
        fontSize: 14,
    },
    statusActive: {
        color: '#34C759',
    },
    statusInActive: {
        color: '#FF3B30',
    },
    section: {
        backgroundColor: 'white',
        padding: 16,
        marginTop: 8,
        marginLeft: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    email: {
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

export default UserDetail;