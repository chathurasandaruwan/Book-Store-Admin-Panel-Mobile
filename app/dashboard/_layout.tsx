import {Drawer} from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

function DashboardLayout() {
    return (
        <Drawer initialRouteName="Home" screenOptions={{
                drawerStyle: { backgroundColor: "#f8f9fa", width: 260, paddingTop: 30},
                drawerActiveTintColor: "white",
                drawerActiveBackgroundColor: "#000",
                drawerInactiveTintColor: "#333",
                drawerItemStyle: { borderRadius: 10, marginVertical: 5 },
                drawerInactiveBackgroundColor: "#ececec",
                drawerLabelStyle: { fontSize: 16, fontWeight: "bold" },
            }}>
            <Drawer.Screen name="Home" options={{title: "Home",drawerIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                ),}}/>
            <Drawer.Screen name="Book" options={{title: "Book Manage",drawerIcon: ({ color, size }) => (
                    <Ionicons name="book-outline" size={size} color={color} />
                ),}}/>
            <Drawer.Screen name="User" options={{title: "User Manage",drawerIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" size={size} color={color} />
                ),}}/>
            <Drawer.Screen name="Order" options={{title: "Order Details",drawerIcon: ({ color, size }) => (
                    <Ionicons name="cart-outline" size={size} color={color} />
                ),}}/>
        </Drawer>
    );
}
export default DashboardLayout;