import {Stack} from "expo-router";
import OrderDetail from "./OrderDetail";

function OrderLayout() {
    return (
        <Stack >
            <Stack.Screen name='OrderMain' options={{headerShown : false}}/>
            <Stack.Screen name='OrderDetail' options={{headerShown : false}}/>
        </Stack>
    );
}
export default OrderLayout;