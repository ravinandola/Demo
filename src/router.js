import { NavigationContainer } from '@react-navigation/native';
import Home from './module/component/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import "../assets/icon.png"
import { StyleSheet, View } from 'react-native';
import { Image } from '@rneui/base';
import WelcomScreen from './module/component/WelcomScreen';
import LoginScreen from './module/component/auth/LoginScreen';
import LocalStorage from './module/common/LocalStorage';
import DomainScreen from './module/component/auth/DomainScreen';
import FindaingDomain from './module/component/auth/FindaingDomain';
import TabNavigator from './module/component/Tab';
import PasscodeScreen from './module/component/passcodeScreen/PasscodeScreen';
import ChangePassword from './module/component/passcodeScreen/ChangePassword';
import { useEffect, useState } from 'react';



const Stack = createNativeStackNavigator();

function Router(props) {
    const [route, setRoute] = useState('');

    // useEffect(() => {
    //     const fun = async () => {
    //         let res = await LocalStorage.get('isLogin');
    //         if (res == 'Login') {
    //             setRoute("Passcode")
    //         } else {
    //             setRoute("Domain")
    //         }
    //     }
    //     fun()
    // }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Passcode'} screenOptions={{
                gestureEnabled: false
            }}
            >
                <Stack.Screen name="Main" component={TabNavigator} options={{
                    header: () => (
                        <View style={{
                            alignItems: 'center',
                            textDecorationLine: 'none',
                            marginTop: 40,
                            marginBottom: 3

                        }}>
                            <Image
                                style={{
                                    width: 180,
                                    height: 52

                                }}
                                source={require("../assets/test.png")
                                } />
                        </View>
                    ),
                    headerTitleStyle: {
                        textDecorationLine: 'none',
                    },
                }} />
                <Stack.Screen name='Passcode' component={PasscodeScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name="Domain" component={DomainScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name="Welcome" component={WelcomScreen} options={{ headerShown: false, }} />
                <Stack.Screen name="FindingDomain" component={FindaingDomain} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer >

    );
};
const styles = StyleSheet.create({
    icon: {
        width: 170,
        height: 50,
    },
});
export default Router