import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {OrderType} from "../interface/OrderType";


interface OrderCardProps {
    order: OrderType;
    onPress: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, onPress }) => {
    const getStatusColor = (status: OrderType['status']) => {
        switch (status) {
            case 'pending': return '#FF9500';
            case 'complete': return '#34C759';
            default: return '#999';
        }
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.header}>
                <Text style={styles.orderId}>Order #{order.id}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
                    <Text style={[styles.statusText, { color: getStatusColor(order.status) }]}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Text>
                </View>
            </View>

            <View style={styles.customerInfo}>
                <Text style={styles.customerName}>{order.user_id}</Text>
                <Text style={styles.date}>{order.date}</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.itemCount}>{order.books.length} item(s)</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    orderId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },
    customerInfo: {
        marginBottom: 10,
    },
    customerName: {
        fontSize: 14,
        color: '#333',
        marginBottom: 2,
    },
    date: {
        fontSize: 12,
        color: '#666',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingTop: 10,
    },
    itemCount: {
        fontSize: 14,
        color: '#666',
    },
});

export default OrderCard;