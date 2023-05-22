import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loaction from "./Loaction";
import ManageAudit from "./ManageAudit";
import ReviewAudit from "./ReviewAudit";
import PreviewMode from "./PreviewMode";
import AdutiSubmit from "./AdutiSubmit";

const Stack = createNativeStackNavigator();

const LocationNavigator = ({ navigation, route }) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Locatin" component={Loaction} options={{
                headerShown: false
            }} />
            <Stack.Screen name="auditSubmit" component={AdutiSubmit} options={{
                headerShown: false

            }} />
            <Stack.Screen name="MangeAudit" component={ManageAudit} options={{
                headerShown: false

            }} />
            <Stack.Screen name="ReviewAudit" component={ReviewAudit} options={{
                headerShown: false

            }} />
            <Stack.Screen name="PreviewMode" component={PreviewMode} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default LocationNavigator