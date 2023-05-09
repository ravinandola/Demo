import { ButtonGroup, Text } from "@rneui/base"
import { Icon, ListItem } from "@rneui/themed"
import { useState } from "react"
import { View } from "react-native"
import { Divider } from "react-native-paper"

const Policie = () => {
    const buttons = ['All Polocies', 'Mandatoty']
    const [index, setIndex] = useState(0);
    const hanldePolocie = (index) => {
        setIndex(index);
    }
    return (
        <>
            <View style={{ backgroundColor: 'white', height: 'auto' }}>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }
                }>
                    <Text style={{ color: "white" }}>Test</Text>
                </View >
                <ButtonGroup
                    onPress={hanldePolocie}
                    selectedIndex={index}
                    buttons={buttons}
                    containerStyle={{ height: 30 }}
                />
                <Divider />
                {index == 0 ? <>
                    <View style={{ backgroundColor: 'white', height: 700 }}>
                        <Text style={{ marginTop: 15, marginLeft: 10 }}>Test</Text>
                        <View style={{ marginLeft: 11 }}>
                            <ListItem>
                                <Icon name="file-document-outline" type="material-community" color="grey" />
                                <ListItem.Content>
                                    <ListItem.Title>test1</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                            <Divider />
                            <ListItem >
                                <Icon name="file-document-outline" type="material-community" color="grey" />
                                <ListItem.Content>
                                    <ListItem.Title>test2</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <Icon name="file-document-outline" type="material-community" color="grey" />
                                <ListItem.Content>
                                    <ListItem.Title>test3</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                            <Divider />
                        </View>
                    </View>
                </> : <View style={{ marginTop: 20, marginLeft: 20 }}><Text>You currently have no mandatory</Text></View >
                }
            </View>
        </>

    )

}
export default Policie