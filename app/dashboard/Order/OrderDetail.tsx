import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import {orders} from "../../../data/orderData";
import Button from "../../../components/Button";

type RouteParams = {
    orderId: string;
};

const OrderDetail = () => {
    const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
    const navigation = useNavigation();
    const { orderId } = route.params;

    const order = orders.find(o => o.id === orderId);

    if (!order) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Order not found</Text>
                    <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
            </SafeAreaView>
        );
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return '#FF9500';
            case 'complete': return '#34C759';
            default: return '#999';
        }
    };

    const handleUpdateStatus = (newStatus: string) => {
        Alert.alert(
            'Update Status',
            `Are you sure you want to update the status to ${newStatus}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Update',
                    onPress: () => {
                        // Update logic would be implemented here
                        Alert.alert('Status Updated', `Order status updated to ${newStatus}`);
                    }
                }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    {/*order detail*/}
                    <View>
                        <Text style={styles.orderId}>Order #{order.id}</Text>
                        <Text style={styles.date}>{order.date}</Text>
                    </View>
                    <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                        <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Text>
                    </View>
                </View>
                {/*customer detail*/}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Customer Information</Text>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Id</Text>
                        <Text style={styles.detailValue}>{order.user_id}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Name</Text>
                        <Text style={styles.detailValue}>{order.user_id}</Text>
                    </View>
                </View>
                {/*book details*/}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Order Items</Text>
                    {order.books.map((item, index) => (
                        <View key={index} style={styles.itemRow}>
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemTitle}>{item.bookId}</Text>
                                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
                            </View>
                            <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
                        </View>
                    ))}
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValue}>${1000.22.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Update Status</Text>
                    <View style={styles.statusButtons}>
                        <Button
                            title="pending"
                            onPress={() => handleUpdateStatus('pending')}
                            type="secondary"
                            style={{
                                ...styles.statusButton,
                                ...(order.status === 'pending' ? styles.activeStatusButton : {})
                            }}
                            textStyle={order.status === 'pending' ? styles.activeStatusText : undefined}
                            disabled={order.status === 'pending'}
                        />

                        <Button
                            title="complete"
                            onPress={() => handleUpdateStatus('complete')}
                            type="secondary"
                            style={{
                                ...styles.statusButton,
                                ...(order.status === 'complete' ? styles.activeStatusButton : {})
                            }}
                            textStyle={order.status === 'complete' ? styles.activeStatusText : undefined}
                            disabled={order.status === 'complete'}
                        />
                    </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
    },
    orderId: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#666',
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    statusText: {
        fontSize: 14,
        fontWeight: '600',
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
        marginBottom: 12,
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
        flex: 1,
    },
    detailValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        flex: 2,
        textAlign: 'right',
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    itemInfo: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 4,
    },
    itemQuantity: {
        fontSize: 14,
        color: '#666',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        marginTop: 8,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0066CC',
    },
    statusButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    statusButton: {
        flex: 1,
        marginHorizontal: 4,
    },
    activeStatusButton: {
        backgroundColor: '#0066CC',
    },
    activeStatusText: {
        color: 'white',
    },
    cancelButton: {
        marginTop: 8,
    },
});

export default OrderDetail;