import { Icon, ListItem, Text } from "@rneui/base"
import { View } from "react-native"
import { Divider } from "react-native-paper"
import Layout from "../../common/Layout"
import OpcButtonGroup from "../../common/OpcButtonGroup"
import OpcListItem from "../../common/OpcListItem"
import IconWrapper from "../../common/IconWrapper"
const notificationsList = [{
    Title: "Test",
    subtitle: "1 week ago",
    icon: "bell"
},
{
    Title: "Test",
    subtitle: "1 week ago",
    icon: "bell"
}
]
const Notifications = () => {
    return (<>
        <Layout title={`${notificationsList.length} Notifications`}>
            {
                notificationsList.map((item) => {
                    return <>
                        <OpcListItem>
                        <IconWrapper name={item.icon} />
                            <OpcListItem.Content>
                                <OpcListItem.Title>{item.Title}</OpcListItem.Title>
                            </OpcListItem.Content>
                            <OpcListItem.Subtitle>{item.subtitle}</OpcListItem.Subtitle>
                        </OpcListItem>
                        <Divider/>
                    </>
                })
            }
        </Layout>
    </>)
}
export default Notifications