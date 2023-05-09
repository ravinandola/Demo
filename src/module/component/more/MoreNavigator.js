import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoreList from "./MorList";
import Enrolments from "./training/Enrolments";
import { useEffect } from "react";
import { View } from "react-native";
import { Image } from "@rneui/base";
import { useLayoutEffect } from "react";
import Notifications from "./Notifications";

const Stack = createNativeStackNavigator();

const MoreNavigator = ({ navigation, route }) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="More" component={MoreList} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Training" component={Enrolments} options={{
                headerShown: false

            }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
export default MoreNavigator