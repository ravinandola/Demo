import { NavigationContainer } from '@react-navigation/native';
import Home from './module/component/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import "../assets/icon.png"
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Image } from '@rneui/base';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import CustomDrawerContent from './module/component/CustomDrawer';
import { Fragment } from 'react';
import WelcomScreen from './module/component/WelcomScreen';
import LoginScreen from './module/component/auth/LoginScreen';
import LocalStorage from './module/common/LocalStorage';
import DomainScreen from './module/component/auth/DomainScreen';
import FindaingDomain from './module/component/auth/FindaingDomain';
import PinScreen from './module/component/pin/PinScreen';
import More from './module/component/more/MorList';
import Enrolments from './module/component/more/training/Enrolments';
import TabNavigator from './module/component/Tab';
import Policie from './module/component/Tab/oparationsManuals/Policie';



const Stack = createNativeStackNavigator();

function Router(props) {
    const isLogin = LocalStorage.get('isLogin')
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name="Main" component={TabNavigator} options={{
                    headerTitle: () => (
                        <View style={{
                            alignItems: 'center',
                            textDecorationLine: 'none',
                        }}>
                            <Image
                                style={{
                                    width: 170,
                                    height: 40

                                }}
                                source={require("../assets/test.png")
                                } />
                        </View>
                    ),
                    headerTitleStyle: {
                        textDecorationLine: 'none',
                    },
                }} />
                <Stack.Screen name="Domain" component={DomainScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name="Welcome" component={WelcomScreen} options={{ headerShown: false, }} />
                <Stack.Screen name="FindingDomain" component={FindaingDomain} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};
const styles = StyleSheet.create({
    icon: {
        width: 170,
        height: 50,
    },
});
export default Router