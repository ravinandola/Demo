import { Card, Divider, Icon, Text } from "@rneui/base"
import { ScrollView } from "react-native"
import { View } from "react-native"

const Dashboard = () => {
    return (
        <>
            <View style={{ height: 700, backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                    <Text style={{ color: "white" }}>DASHBOARD</Text>
                </View >
                <View style={{ alignItems: 'cenetr', backgroundColor: 'white', padding: 20 }}>
                    <Text>QUICK LINKS</Text>
                </View>
                <Divider />
                <ScrollView>
                    <View style={{ justifyContent: 'space-evenly' }}>
                        <View >
                            <Card>
                                <Card.Title><Icon type="material-community" size={50} color={'green'} name="magnify"></Icon></Card.Title>
                                <Text style={{ fontSize: 10 }}>Fairwork Award Finder</Text>
                            </Card>
                        </View>
                        <View>
                            <View>
                                <Card>
                                    <Card.Title><Icon type="material-community" size={50} color={'green'} name="av-timer"></Icon></Card.Title>
                                    <Text style={{ fontSize: 10 }}>Fairwork Award Employee</Text>

                                </Card>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' }}>
                        <View >
                            <Card>
                                <Card.Title><Icon type="material-community" size={50} color={'green'} name="link-variant"></Icon></Card.Title>
                                <Text style={{ fontSize: 10 }}>Fairwork Award Employee</Text>
                            </Card>
                        </View>
                        <View>
                            <View>
                                <Card>
                                    <Card.Title><Icon type="material-community" size={50} color={'green'} name="link-variant"></Icon></Card.Title>
                                    <Text style={{ fontSize: 10 }}>Fairwork Award Finder</Text>

                                </Card>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'cenetr', backgroundColor: 'white', padding: 20 }}>
                        <Text>NEWS</Text>
                    </View>
                    <Divider />
                </ScrollView>

            </View>
        </>
    )

}
export default Dashboard