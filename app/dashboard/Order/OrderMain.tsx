import React from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {OrderType} from "../../../interface/OrderType";
import {orders} from "../../../data/orderData";
import OrderCard from "../../../components/OrderCard";
import {useRouter} from "expo-router";


const OrderMain = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const router = useRouter();

    const filteredOrders = orders.filter(order =>
        order.user_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.includes(searchQuery)
    );

    const handleOrderPress = (order: OrderType) => {
        router.push({ pathname: "/dashboard/Order/OrderDetail", params: { orderId: order.id }});
    };

    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search orders..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {searchQuery ? (
                        <Icon
                            name="close"
                            size={20}
                            color="#999"
                            style={styles.clearIcon}
                            onPress={() => setSearchQuery('')}
                        />
                    ) : null}
                </View>
            </View>

            <FlatList
                data={filteredOrders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <OrderCard order={item} onPress={() => handleOrderPress(item)} />
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
        padding: 16,
        paddingBottom: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
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
    listContent: {
        padding: 16,
    },
});
export default OrderMain;