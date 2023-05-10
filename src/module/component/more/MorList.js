import { Icon, ListItem, Text } from "@rneui/base"
import { Divider } from '@rneui/themed';
import { useEffect } from "react";
import { View, ScrollView } from "react-native";
import ChangePassword from "../passcodeScreen/ChangePassword";
import { useState } from "react";
import LocalStorage from "../../common/LocalStorage";

const MoreList = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const hanldeList = (tab) => {
        if (tab === "SingOut") {
            LocalStorage.clear('finalPasscode').then(() => {
                LocalStorage.clear("firstTimePasscode").then(() => {
                    navigation.navigate("Domain");
                })
            })
        }
        if (tab === 'ChangePassword') {
            setShow(true);
            return;
        }
        navigation.navigate(tab);
    }

    const ChangePasswordElement = (
        <ChangePassword closeModal={() => {
            setShow(false);
        }} />
    )
    return (
        <>

            {show && ChangePasswordElement}
            <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                <Text style={{ color: "white" }}>More</Text>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: 'white', height: 700 }}>
                    <ListItem onPress={() => { hanldeList("Training") }}>
                        <Icon name="account-tie-hat" type="material-community" color="grey" />
                        <ListItem.Content>
                            <ListItem.Title>Training</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <Divider />
                    <ListItem onPress={() => { hanldeList("Notifications") }}>
                        <Icon name="bell" type="material-community" color="grey" />
                        <ListItem.Content>
                            <ListItem.Title>Notifications</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <Divider />
                    <ListItem onPress={() => { hanldeList("Profile") }}>
                        <Icon name="account-circle" type="material-community" color="grey" />
                        <ListItem.Content>
                            <ListItem.Title>My Profile</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <Divider />
                    <ListItem onPress={() => { hanldeList("ChangePassword") }}>
                        <Icon name="lock-outline" type="material-community" color="grey" />
                        <ListItem.Content>
                            <ListItem.Title>Chnage Passcode</ListItem.Title>
                        </ListItem.Content>

                        <ListItem.Chevron />
                    </ListItem>
                    <Divider />
                    <ListItem onPress={() => { hanldeList("SingOut") }}>
                        <Icon name="logout" type="material-community" color="grey" />
                        <ListItem.Content>
                            <ListItem.Title>Sing Out</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    <Divider />
                </View>
            </ScrollView>
            <View style={{ alignItems: 'center', padding: 3, backgroundColor: 'gray' }}>
                <Text style={{ color: 'white' }}>Op Central 11.7.6 (10568)</Text>
            </View>

        </>
    )
}
export default MoreList