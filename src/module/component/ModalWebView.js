import { Divider, Icon, ListItem, Text } from "@rneui/base"
import RBSheet from "react-native-raw-bottom-sheet"
import { View, Share, Alert, Linking, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import ModalWebviewWrapper from "../common/ModalWebviewWrapper"
import RNPickerSelect from "react-native-picker-select";
import { BottomSheet } from '@rneui/themed';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import OpcButtonBottomSheet from "../common/OpcButtonBottomSheet"

let icon = ['share', 'google-chrome', 'close']
const list = [
    { title: 'Share', slug: "share" },
    { title: 'Open In Browser', slug: "open_browser" },
    {
        title: 'Cancel',
        slug: "cancel",
        containerStyle: { backgroundColor: 'red', marginTop: 5 },
        titleStyle: { color: 'white', },
    },
];

const ModalWebView = ({ route }) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    const [isVisible, setIsVisible] = useState(false);
    let link = route.params.link || null


    useEffect(() => {
        navigation.setOptions({
            title: '',
            headerLeft: () => (
                <Icon name={'close'} type="material-community" onPress={() => {
                    navigation.goBack()
                    setIsVisible(false)
                }} />
            ),
            headerRight: () => (
                <Icon name={'export-variant'} type="material-community" onPress={() => { setIsVisible(true) }} />
            ),
        })
    }, []);

    const hanldeListItem = async (slug) => {
        switch (slug) {
            case 'share':
                try {
                    let res = await Share.share({
                        message: link
                    });
                    if (res.activityType) {
                        setIsVisible(false)
                    }
                } catch {
                    Alert.alert(error.message);
                }
                break;
            case 'open_browser': Linking.openURL(link);
                setIsVisible(false)
                break;
            case "cancel": setIsVisible(false);
                break;
        };
    };

    return (
        <>
            {/* <OpcButtonBottomSheet
                isVisible={isVisible}
                list={list}
                hanldeList={(slug) => { hanldeListItem(slug) }}
                iconList={icon}
            /> */}

            <BottomSheet isVisible={isVisible} modalProps={{ presentationStyle: "overFullScreen", animationType: "fade" }}>
                <View style={{ paddingBottom: insets.bottom }}>
                    {list.map((l, i) => (
                        <><ListItem
                            style={{ borderRadius: 10 }}
                            key={i}
                            containerStyle={{ ...l.containerStyle, borderRadius: 6, marginRight: 7, marginLeft: 7, marginBottom: 7, alignItems: "center" }}
                            onPress={() => { hanldeList(l.slug) }}
                        >
                            <Icon name={icon[i]} type="material-community" color={l.slug == 'cancel' ? 'white' : "green"} />
                            <ListItem.Content>
                                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                        </>

                    ))}
                </View>
            </BottomSheet>
            <ModalWebviewWrapper link={link} />
        </>
    )
}
export default ModalWebView