import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./dashboard/Dashboard";
import { Icon, Image } from "@rneui/base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Enrolments from "../more/training/Enrolments";
import MoreList from "../more/MorList";
import { useEffect, useState } from "react";
import { View } from "react-native";
import MoreNavigator from "../more/MoreNavigator";
import Task from "./task/Task";
import oparationsManuals from "./oparationsManuals";
import Loaction from "./locationAudit/Loaction";
import LocationNavigator from "./locationAudit/LocationNavigator";
import OparationsManuals from "./oparationsManuals";
import OparationsManualsNavigator from "./oparationsManuals/OparationsManualsNavigator";
import NetInfo from "@react-native-community/netinfo";
import ErrorDialogbox from "../../common/Alert";

const Stack = createNativeStackNavigator();

const TabNavigator = ({ navigation }) => {

    const Tab = createBottomTabNavigator();
   

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'Home': iconName = 'view-dashboard'
                        break;
                    case 'operationsManuals': iconName = 'file-document-outline'
                        break;
                    case "loacationAudit": iconName = 'chart-line'
                        break;
                    case 'Tasks': iconName = 'calendar-check-outline';
                        break;
                    case 'More': iconName = 'menu';
                        break;
                }
                return <Icon name={iconName} type="material-community" size={size} color={color} />;
            },
            tabBarActiveTintColor: '#317F91',
            tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Home" component={Dashboard} options={{
                headerShown: false,
                title: '',
            }} />
            <Tab.Screen name="operationsManuals" component={OparationsManualsNavigator} options={{
                headerShown: false,
                title: ''
            }} />
            <Tab.Screen name="loacationAudit" component={LocationNavigator} options={{
                headerShown: false,
                title: "",
            }}
            />
            <Tab.Screen name="Tasks" component={Task} options={{
                headerShown: false,
                tabBarBadge: 32,
                tabBarBadgeStyle: { backgroundColor: 'green' },
                title: "",
            }}
            />
            <Tab.Screen name="More" component={MoreNavigator} options={{
                headerShown: false,
                tabBarBadge: 3,
                title: "",
                tabBarBadgeStyle: { backgroundColor: 'green' },
            }} />

        </Tab.Navigator >
    )
};
export default TabNavigator