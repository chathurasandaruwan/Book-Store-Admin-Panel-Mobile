import {Stack} from "expo-router";

function UserLayout() {
    return (
        <Stack >
            <Stack.Screen name='UserMain' options={{headerShown : false}}/>
            <Stack.Screen name='UserDetail' options={{headerShown : false}}/>
        </Stack>
    );
}
export default UserLayout;