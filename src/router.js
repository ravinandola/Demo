import { NavigationContainer } from '@react-navigation/native';

import Home from './module/component/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import "../assets/icon.png"
import { StyleSheet, View, AppState } from 'react-native';
import { Image } from '@rneui/base';
import WelcomScreen from './module/component/WelcomScreen';
import LoginScreen from './module/component/auth/LoginScreen';
import LocalStorage from './module/common/LocalStorage';
import DomainScreen from './module/component/auth/DomainScreen';
import FindaingDomain from './module/component/auth/FindaingDomain';
import TabNavigator from './module/component/Tab';
import PasscodeScreen from './module/component/passcodeScreen/PasscodeScreen';
import ChangePassword from './module/component/passcodeScreen/ChangePassword';
import { useEffect, useRef, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import ErrorDialogbox from './module/common/Alert';
import Toast from 'react-native-root-toast';
import ModalWebView from './module/component/ModalWebView';
import { withTheme } from '@rneui/themed';
import UserForm from './module/component/UserForm';


const Stack = createNativeStackNavigator();

function Router(props) {
    const { theme } = props;
    const [route, setRoute] = useState('');
    const [connectionStatus, setConnectionStatus] = useState(false);
    const [connectionType, setConnectionType] = useState(null);
    const [isOff, setIsOff] = useState(false);
    const { showAlert } = ErrorDialogbox();
    const navigationRef = useRef();

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

    const handleNetworkChange = (state) => {
        if (!state.isConnected) {
            setIsOff(true)
        }
        setConnectionStatus(state.isConnected);
    };
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(handleNetworkChange)
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        if (isOff && connectionStatus) {
            Toast.show(' Internet Back', {
                duration: Toast.durations.LONG,
                backgroundColor: "green"

            });
        } else {
            if (!connectionStatus && isOff) {
                Toast.show('Check Your Internet connection', {
                    duration: Toast.durations.LONG,
                    backgroundColor: "red",
                    animationL: true
                });
            }
        }
    }, [isOff, connectionStatus])

    const handleAppState = (appState) => {
        if (appState === 'background') {
            navigationRef.current?.navigate('Passcode');
        };
    };

    useEffect(() => {
        const subscription = AppState.addEventListener('change', handleAppState)
        return () => {
            subscription.remove();
        };
    }, []);


    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={'UserForm'} screenOptions={{
                gestureEnabled: false,

                headerVisible: false,
            }}
            >
                <Stack.Screen name="Main" component={TabNavigator} options={{
                    header: () => (
                        <View style={{
                            alignItems: 'center',
                            textDecorationLine: 'none',
                            marginTop: 0,
                            marginBottom: 0,
                            backgroundColor: theme.colors.primary

                        }}>
                            <Image
                                style={{
                                    width: 180,
                                    height: 52,
                                    marginTop: 50,

                                }}
                                source={require("../assets/logo.png")
                                } />
                        </View>
                    ),
                    headerTitleStyle: {
                        textDecorationLine: 'none',
                    },
                }} />
                <Stack.Screen name='Passcode' component={PasscodeScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name='UserForm' component={UserForm} options={{ headerShown: false, title: '' }} />

                <Stack.Screen name="Domain" component={DomainScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, title: '' }} />
                <Stack.Screen name="Welcome" component={WelcomScreen} options={{ headerShown: false, }} />
                <Stack.Screen name="FindingDomain" component={FindaingDomain} options={{ headerShown: false }} />
                <Stack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
                    <Stack.Screen name="Webview" options={{ headerShown: true }}
                        component={ModalWebView} />
                </Stack.Group>
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
export default withTheme(Router)