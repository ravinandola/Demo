import { ListItem, Text } from "@rneui/base"
import { Icon } from "@rneui/themed"
import { ScrollView, View } from "react-native"
import { Divider } from "react-native-paper"

const Task = ({ navigation }) => {
    let taskList = []
    for (let index = 0; index <= 32; index++) {
        taskList.push({ name: `Test${index}` })
    }
    const hanldeTask = () => {
        navigation.navigate('Training');

    }
    return (
        <>
            <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91', }}>
                <Text style={{ color: "white" }}>32 Task</Text>
            </View>
            <View style={{ backgroundColor: 'white' }}>
                <ScrollView>

                    {
                        taskList.map((item) => {
                            return <>
                                <ListItem onPress={() => { hanldeTask() }}>
                                    <Icon name="file-document-outline" type="material-community" color="grey" />
                                    <ListItem.Content>
                                        <ListItem.Title>{item.name}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Subtitle>1 week ago</ListItem.Subtitle>
                                </ListItem>
                                <Divider />
                            </>

                        })
                    }
                </ScrollView >
            </View >
        </>
    )
}
export default Task