import {Stack} from "expo-router";

function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='dashboard' options={{headerShown:false}}/>
            <Stack.Screen name='index' options={{headerShown:false}}/>
        </Stack>
    );
}
export default RootLayout;