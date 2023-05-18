import { ListItem, Text } from "@rneui/base"
import { Icon } from "@rneui/themed"
import { ScrollView, View } from "react-native"
import { Divider } from "react-native-paper"
import Layout from "../../../common/Layout"
import OpcListItem from "../../../common/OpcListItem"
import IconWrapper from "../../../common/IconWrapper"

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
            <Layout title={"TASK"}>
                <View style={{ backgroundColor: 'traspernt' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            taskList.map((item) => {
                                return <>
                                    <OpcListItem backgroundColor={''}>
                                        <IconWrapper name="file-document-outline" />
                                        <OpcListItem.Content>
                                        <OpcListItem.Title>{item.name}</OpcListItem.Title>
                                        </OpcListItem.Content>
                                        <OpcListItem.Subtitle>1 week ago</OpcListItem.Subtitle>
                                    </OpcListItem>
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