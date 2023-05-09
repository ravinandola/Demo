import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OparationsManuals from ".";
import Policie from "./Policie";
const Stack = createNativeStackNavigator();

const OparationsManualsNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="manual" component={OparationsManuals} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Policie" component={Policie} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default OparationsManualsNavigator