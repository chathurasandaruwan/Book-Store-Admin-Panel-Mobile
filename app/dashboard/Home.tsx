import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {books} from "../../data/bookData";
import {orders} from "../../data/orderData";
import StatsCard from "../../components/StatsCard";
import {dashboardStats} from "../../data/DashboardData";


const Home = () => {
    // Get recent books (last 3)
    const recentBooks = [...books].sort((a, b) =>
        Number(b.id) - Number(a.id))
    .slice(0, 3);

    // Get recent orders (last 3)
    const recentOrders = [...orders].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ).slice(0, 3);

    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.greeting}>Welcome back, Admin!</Text>
                <Text style={styles.date}>{new Date().toDateString()}</Text>

                <View style={styles.statsContainer}>
                    <StatsCard
                        title="Total Books"
                        value={dashboardStats.totalBooks}
                        icon="menu-book"
                        color="#0066CC"
                    />
                    <StatsCard
                        title="Total Orders"
                        value={dashboardStats.totalOrders}
                        icon="shopping-cart"
                        color="#34C759"
                    />
                    <StatsCard
                        title="Pending Orders"
                        value={dashboardStats.pendingOrders}
                        icon="pending-actions"
                        color="#FF9500"
                    />
                    <StatsCard
                        title="Revenue"
                        value={`$${dashboardStats.revenue.toFixed(2)}`}
                        icon="attach-money"
                        color="#5856D6"
                    />
                    <StatsCard
                        title="Low Stock Books"
                        value={dashboardStats.lowStockBooks}
                        icon="warning"
                        color="#FF3B30"
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Books</Text>
                    {recentBooks.map(book => (
                        <View key={book.id} style={styles.listItem}>
                            <View>
                                <Text style={styles.listItemTitle}>{book.title}</Text>
                                <Text style={styles.listItemSubtitle}>{book.author}</Text>
                            </View>
                            <Text style={styles.listItemPrice}>${book.price.toFixed(2)}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Orders</Text>
                    {recentOrders.map(order => (
                        <View key={order.id} style={styles.listItem}>
                            <View>
                                <Text style={styles.listItemTitle}>Order #{order.id}</Text>
                                <Text style={styles.listItemSubtitle}>{order.user_id}</Text>
                            </View>
                            <Text style={styles.listItemPrice}>${1000.12.toFixed(2)}</Text>
                        </View>
                    ))}
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
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    statsContainer: {
        marginBottom: 20,
    },
    section: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    listItemTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 4,
    },
    listItemSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    listItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0066CC',
    },
});

export default Home;