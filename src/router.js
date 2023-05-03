import LoginScreen from './module/component/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import Home from './module/component/Home';
import About from './module/component/About';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

// const  Drawer =  createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notifications" component={About} />
        </Tab.Navigator>
    )
}

function Router() {
    const { isLogin } = useSelector(state => state.auth)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                {
                    !isLogin ? (
                        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />)
                        :
                        <Stack.Screen name="tab" component={DrawerNavigator} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default Router