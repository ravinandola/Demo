import { Text } from '@rneui/base';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import PinView from 'react-native-pin-view';
import { TouchableOpacity } from 'react-native';
import LocalStorage from '../../common/LocalStorage';


const PasscodeScreen = ({ navigation, route }) => {
    const [label, setLable] = useState({
        title: '',
        subTitle: ''
    });
    const pinViewRef = useRef(null);

    async function fetchData() {
        let finalPasscode = await LocalStorage.get('finalPasscode') || null;
        let title = ''
        let subTitle = '';
        if (finalPasscode) {
            title = 'passcode Required'
            subTitle = 'Enter your Paasscode to unlock'
        } else {
            title = 'Create Your Passcode'
            subTitle = 'Enter a 4 digit Passscode.'
        }
        setLable({
            ...label,
            ['title']: title,
            ['subTitle']: subTitle
        });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
            pinViewRef.current.clearAll();
        })
        return unsubscribe;
    }, [navigation])

    handleValueChnage = async (value) => {
        let finalPasscode = await LocalStorage.get('finalPasscode') || null;
        console.log(finalPasscode)
        let firstTimePasscode = await LocalStorage.get('firstTimePasscode') || null;
        if (value.length === 4) {
            if (finalPasscode) {
                if (finalPasscode == value) {
                    LocalStorage.clear("firstTimePasscode").then(() => {
                        navigation.navigate('Main');
                    });
                } else {
                    setLable({
                        ...label,
                        ['subTitle']: 'Incorrect, Try again'
                    });
                    setTimeout(() => {
                        pinViewRef.current.clearAll();
                    }, 100);
                }
                return;
            }
            if (firstTimePasscode) {
                if (firstTimePasscode == value) {
                    LocalStorage.set('finalPasscode', value)
                    navigation.navigate('Main');
                } else {
                    setLable({
                        ...label,
                        ['subTitle']: 'Paasscodes don`t match. start again'
                    });
                    LocalStorage.clear("firstTimePasscode");
                    setTimeout(() => {
                        pinViewRef.current.clearAll();
                    }, 100);
                }
            } else {
                LocalStorage.set('firstTimePasscode', value);
                setLable({
                    ...label,
                    ['subTitle']: 'Re-enter your Passscode'
                });
                pinViewRef.current.clearAll();
            }
        }
    };

    const halndleDel = () => {
        pinViewRef.current.clear();
    };

    return (

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
                errorText="Incorrect PIN"
                inputViewFilledStyle={{ backgroundColor: 'green' }}

                buttonViewStyle={{
                    backgroundColor: "#3B7A57",
                }}
                buttonBgColor="green"
                buttonActiveBgColor="darkgreen"
                ref={pinViewRef}
                customRightButton={<TouchableOpacity onPress={() => { halndleDel() }}>
                    <Text style={{ color: "#3B7A57" }}>Delete</Text></TouchableOpacity>}
            />
        </View>
    )
};

export default PasscodeScreen