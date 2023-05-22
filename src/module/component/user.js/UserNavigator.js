import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (

        <Stack.Navigator initialRouteName="list">
              <Stack.Screen name="list" component={UserList} options={{
                headerShown: false
            }} />
            <Stack.Screen name="form" component={UserForm} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
export default UserNavigator