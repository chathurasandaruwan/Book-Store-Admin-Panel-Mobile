import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {UserType} from "../interface/UserType";


interface UserCardProps {
    user: UserType;
    onPress: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress }) => {
    const getStatusColor = (status: UserType['status']) => {
        switch (status) {
            case 'active': return '#34C759';
            case 'inactive': return '#FF3B30';
            default: return '#999';
        }
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.header}>
                <Text style={styles.userId}>User #{user.id}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(user.status) + '20' }]}>
                    <Text style={[styles.statusText, { color: getStatusColor(user.status) }]}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </Text>
                </View>
            </View>

            <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.role}>{user.role}</Text>
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
    userId: {
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
    userInfo: {
        marginBottom: 10,
    },
    userName: {
        fontSize: 14,
        color: '#333',
        marginBottom: 2,
    },
    email: {
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
    role: {
        fontSize: 14,
        color: '#0066CC',
    },
});

export default UserCard;