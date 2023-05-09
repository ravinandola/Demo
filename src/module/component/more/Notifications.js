import { Icon, ListItem, Text } from "@rneui/base"
import { View } from "react-native"
import { Divider } from "react-native-paper"

const Notifications = () => {
    return (<>
        <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
            <Text style={{ color: "white" }}>2 Notifications</Text>
        </View>
        <View style={{ backgroundColor: 'white' }}>
            <ListItem>
                <Icon name="inbox" type="material-community" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>test</ListItem.Title>
                </ListItem.Content>
                <ListItem.Subtitle>1 week ago</ListItem.Subtitle>
                <ListItem.Chevron name="bell" type="material-community"></ListItem.Chevron>
            </ListItem>
            <Divider />
            <ListItem>
                <Icon name="bell" type="material-community" color="grey" />
                <ListItem.Content>
                    <ListItem.Title>test2</ListItem.Title>
                </ListItem.Content>
                <ListItem.Subtitle>1 week ago</ListItem.Subtitle>
                <ListItem.Chevron name="bell" type="material-community"></ListItem.Chevron>
            </ListItem>
            <Divider />
        </View>
    </>)
}
export default Notifications