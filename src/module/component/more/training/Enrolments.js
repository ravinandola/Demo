import { ButtonGroup, Image, Text } from "@rneui/base"
import { useState } from "react";
import { ScrollView, View } from "react-native"
const Enrolments = () => {
    const [index, setIndex] = useState(0);

    let value = [1, 2, 4, 4, 6, 7, 8, 9, 0, , 656, 56, 5, 65, 65, 6, 56, 3, 1];
    const halderTraining = () => {
        console.log("ff")
    };
    const buttons = ['Enrolments', 'All Programs']

    return (
        <>
            <View style={{ backgroundColor: 'white', height: 700 }}>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                    <Text style={{ color: "white" }}>Training</Text>
                </View>
                <View style={{
                    paddingLeft: 20, paddingRight: 20,
                }} >
                    <ButtonGroup
                        onPress={(index) => { setIndex(index) }}
                        selectedIndex={index}
                        buttons={buttons}
                        containerStyle={{ height: 30 }}
                    />
                </View>
                <ScrollView>
                    <View style={{
                        flex: 2,
                        flexDirection: 'row',
                        marginTop: 20,
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                    }}>
                        {
                            value.map(() => {
                                return <View style={{
                                }}>

                                    <Image
                                        source={require("../../../../../assets/doc.png")}
                                        style={{
                                            width: 180,
                                            height: 170,
                                        }}
                                        onPress={() => { halderTraining() }}
                                    />
                                    <Text style={{ textAlign: 'cenetr', paddingLeft: 5, paddingTop: 20, paddingBottom: 20 }}>MY PROGRAM POLICY</Text>
                                </View>
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
export default Enrolments