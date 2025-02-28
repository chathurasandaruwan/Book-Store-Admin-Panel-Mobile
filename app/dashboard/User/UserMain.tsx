import {FlatList, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {useRouter} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import {users} from "../../../data/UserData";
import {UserType} from "../../../interface/UserType";
import UserCard from "../../../components/UserCard";

const UserMain = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const router = useRouter();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.id.includes(searchQuery)
    );

    const handleOrderPress = (user: UserType) => {
        router.push({ pathname: "/dashboard/User/UserDetail", params: { userId: user.id }});
    };

    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Users..."
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
                data={filteredUsers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <UserCard user={item} onPress={() => handleOrderPress(item)} />
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
export default UserMain;