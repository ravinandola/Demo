import { Icon, ListItem, Text } from "@rneui/base"
import { Divider } from '@rneui/themed';
import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import ChangePassword from "../passcodeScreen/ChangePassword";
import { useState } from "react";
import LocalStorage from "../../common/LocalStorage";
import Layout from "../../common/Layout";
import OpcListItem from "../../common/OpcListItem";
import IconWrapper from "../../common/IconWrapper";

let MoreItemList = [{
    icon: 'account-tie-hat',
    title: 'Training',
    slug: "Training"
},
{
    icon: 'bell',
    title: "Notifications",
    slug: 'Notifications'
},
{
    title: 'My Profile',
    icon: 'account-circle',
    slug: 'my_profile'
},
{
    title: 'Chnage Passcode',
    icon: "lock-outline",
    slug: "chnagePassword"
},
{
    title: 'Sing Out',
    icon: 'logout',
    slug: 'logout'
}
]
const MoreList = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const hanldeList = (slug) => {
        if (slug === "logout") {
            LocalStorage.clear('finalPasscode').then(() => {
                LocalStorage.clear("firstTimePasscode").then(() => {
                    navigation.navigate("Domain");
                })
            })
        }
        if (slug === 'chnagePassword') {
            setShow(true);
            return;
        }
        navigation.navigate(slug);
    }

    const ChangePasswordElement = (
        <ChangePassword closeModal={() => {
            setShow(false);
        }} />
    );

    return (
        <>

            {show && ChangePasswordElement}
          c
        </>
    )
}
export default MoreList