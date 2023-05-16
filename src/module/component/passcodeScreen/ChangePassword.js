import { Text } from "@rneui/base";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { View } from "react-native";
import { TouchableOpacity,Platform } from "react-native";
import PinView from "react-native-pin-view";
import RBSheet from "react-native-raw-bottom-sheet";
import LocalStorage from "../../common/LocalStorage";
import { useNavigation } from "@react-navigation/native";


let finalPasscode = null;
const ChangePassword = ({ closeModal }) => {
    const navigation = useNavigation()
    const sheetRef = useRef();
    const pinViewRef = useRef();
    const [label, setLable] = useState({
        title: '',
        subTitle: ''
    });
    useEffect(() => {
        sheetRef.current.open();
    }, []);

    useEffect(() => {
        async function fetchData() {
            finalPasscode = await LocalStorage.get('finalPasscode') || null;
            if (finalPasscode) {
                setLable({
                    ['title']: 'Enter Your Passcode',
                    ['subTitle']: 'Enter your passcode to change it.'
                });
            }
        }
        fetchData()
    }, [])

    const handleValueChnage = (value) => {
        // LocalStorage.set('finalPasscode', '1234')

        if (value.length == 4) {
            if (value == finalPasscode) {
                sheetRef.current.close();
                LocalStorage.clear("finalPasscode").then(() => {
                    LocalStorage.clear("firstTimePasscode").then(() => {
                        navigation.navigate('Passcode')
                    })
                })
            } else {
                setLable({
                    ...label,
                    ['subTitle']: 'Incorrect, Try again'
                });
                setTimeout(() => {
                    pinViewRef.current.clearAll();
                }, 100);
            }

        }
    };

    const halndleButton = (type) => {
        if (type == 'del') {
            pinViewRef.current.clear();
            return;
        }
        sheetRef.current.close();
        closeModal()
    };


    return (
        <>
            <RBSheet
                ref={sheetRef}
                height={850}
                // height of the bottom sheet
                animationType="slide" // animation type (fade, slide, none)
                closeOnDragDown={false} // close the bottom sheet when dragged down
                closeOnPressMask={false} // close the bottom sheet when the mask is pressed
                duration={250} // duration of the animation in milliseconds
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                    <Text style={{ marginTop: 30, fontWeight: 500, }}>{label.title}</Text>
                    <Text style={{ marginTop: 30, marginBottom: 20, fontWeight: 200, }}>{label.subTitle}</Text>
                    <PinView
                        inputSize={20}
                        pinLength={4}
                        inputViewStyle={{
                            borderWidth: 2,
                            borderColor: '#3B7A57',
                        }}
                        buttonTextColor="white"
                        inputActiveBgColor="green"
                        onValueChange={(value) => handleValueChnage(value)}
                        buttonSize={75}
                        buttonTextStyle={{
                            fontWeight: 'blod',
                            color: "white",
                        }}
                        inputViewFilledStyle={{ backgroundColor: 'green' }}

                        buttonViewStyle={{
                            backgroundColor: "#3B7A57",
                        }}
                        buttonBgColor="green"
                        buttonActiveBgColor="darkgreen"
                        ref={pinViewRef}
                        customRightButton={<TouchableOpacity onPress={() => { halndleButton('del') }}>
                            <Text style={{ color: "#3B7A57" }}>Delete</Text></TouchableOpacity>}

                        customLeftButton={<TouchableOpacity onPress={() => { halndleButton('cal') }}>
                            <Text style={{ color: "#3B7A57" }}>Cancel</Text></TouchableOpacity>}
                    />
                </View >
            </RBSheet>
        </>
    )
}
export default ChangePassword