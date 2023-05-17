import { ListItem, Text } from "@rneui/base"
import { Icon } from "@rneui/themed"
import { ScrollView, View } from "react-native"
import { Divider } from "react-native-paper"
import Layout from "../../../common/Layout"

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
            <Layout title={"32 TASK"}>
            <View style={{ backgroundColor: 'traspernt' }}>
                <ScrollView>
                    {
                        taskList.map((item) => {
                            return <>
                                <ListItem onPress={() => { hanldeTask() }}  containerStyle={{backgroundColor:"traspernt"}}>
                                    <Icon name="file-document-outline" type="material-community" color="#317F91" />
                                    <ListItem.Content>
                                        <ListItem.Title style={{fontSize:15, color:"gray"}}>{item.name}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Subtitle style={{fontSize:10, color:"gray"}}>1 week ago</ListItem.Subtitle>
                                </ListItem>
                                <Divider />
                            </>

                        })
                    }
                </ScrollView >
            </View >
            </Layout>
        </>
    )
}
export default Task