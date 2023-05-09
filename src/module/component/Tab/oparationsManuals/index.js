import { Card, Image, Text } from "@rneui/base"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

const OparationsManuals = ({ navigation }) => {
    let value = [1, 2, 4, 4, 6, 7, 8, 9, 0, , 656, 56, 5, 65, 65, 6, 56, 3, 1];

    const hanldeChnage = () => {
        navigation.navigate('Policie');
    }
    return (
        <>
            <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                <Text style={{ color: "white" }}>OPREACTIONS MANUALS</Text>
            </View>
            <ScrollView>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-around',
                    backgroundColor: 'white',
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
                                    onPress={() => { hanldeChnage() }}
                                />
                                <Text style={{ textAlign: 'cenetr', paddingLeft: 5, paddingTop: 20, paddingBottom: 20 }}>MY PROGRAM POLICY</Text>
                            </View>
                        })
                    }

                </View >
            </ScrollView>
        </>
    )
}
export default OparationsManuals