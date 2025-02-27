import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {Drawer} from "expo-router/drawer";

function DashboardLayout() {
    return (
        <Drawer initialRouteName="Home">
            <Drawer.Screen name="Home" options={{title: "Home"}}/>
            <Drawer.Screen name="Book" options={{title: "Book Manage"}}/>
            <Drawer.Screen name="User" options={{title: "User Manage"}}/>
            <Drawer.Screen name="Order" options={{title: "Order Details"}}/>
        </Drawer>
    );
}
export default DashboardLayout;