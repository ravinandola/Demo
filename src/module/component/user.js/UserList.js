import { Divider, Text } from "@rneui/base"
import Layout from "../../common/Layout"
import OpcListItem from "../../common/OpcListItem"
import useDatabase from "../../common/hook/UseDatabase"
import { View } from "react-native"
import { FAB, useTheme } from "@rneui/themed"
import { useEffect, useState } from "react"

const UserList = ({ navigation }) => {
    const { theme } = useTheme();
    let themeColor = theme.colors.primary
    const { userList } = useDatabase();
    console.log(userList)
    const [list, setList] = useState([])
    useEffect(() => {
        setList(userList)
    }, [navigation, userList])
    const hanldeList = (user) => {
        navigation.navigate('form', { item: user });
    }
    return (
        <>
            <Layout title={'USER LIST'} isScroll={true}>
                <View style={{ backgroundColor: "traspernt", paddingStart: 10, paddingEnd: 10 }}>
                    {
                        list.map((item) => {
                            return <>
                                <OpcListItem onPress={() => { hanldeList(item) }}>
                                    <OpcListItem.Content>
                                        <OpcListItem.Title>{item.firstname.Tous} {item.lastname}</OpcListItem.Title>
                                    </OpcListItem.Content>
                                    <OpcListItem.Chevron />
                                </OpcListItem>
                                <Divider />
                            </>
                        })
                    }
                </View>


                <Divider />
                {
                    list.length === 0 && <View style={{ alignItems: 'center', paddingTop: 30 }}><Text>
                        Data Not Found
                    </Text></View>
                }
            </Layout >
            <FAB
                visible={true}
                style={{ paddingBottom: 25, position: 'absolute', bottom: 2, end: 20 }}
                icon={{ name: 'add', color: 'white' }}
                color={themeColor}
                onPress={() => {
                    navigation.navigate('form')
                }}
            />
        </>
    )

}
export default UserList