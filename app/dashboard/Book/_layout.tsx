import {Stack} from "expo-router";

function BookLayout() {
    return (
        <Stack >
            <Stack.Screen name='BooksMain' options={{headerShown : false}}/>
            <Stack.Screen name='AddBook' options={{headerShown : false}}/>
            <Stack.Screen name='BookDetail' options={{headerShown : false}}/>
        </Stack>
    );
}
export default BookLayout;