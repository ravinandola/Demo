import { TouchableOpacity, Dimensions, View } from "react-native";
import { Card, Image, Text } from "@rneui/base"
import UseUtility from "./hook/UseUtility";

const OpcDocCard = ({hanldePolicie}) => {
    let value = [1, 2, 4, 4, 6, 7, 8, 9, 0, , 656, 56, 5, 65, 65, 6, 56, 3, 1];
    let width = Dimensions.get('window').width / 2.6;
    let height = Dimensions.get('window').height / 5.50;
    let imageWidth = width - 15;
    let imageHeight = (Dimensions.get('window').height / 6) - 17;

    const { shadowColor } = UseUtility();

    return (
        <>
            <TouchableOpacity onPress={() => {
                console.log("ff")
                hanldePolicie()
            }}>
                <Card containerStyle={{
                    borderRadius: 6,
                    borderWidth: 0,
                    shadowColor: shadowColor(),
                    shadowOffset: {
                        width: 3,
                        height: 3,
                    },
                    width: width,
                    height: height,
                    marginBottom: 2,
                    padding: 0,
                    alignItems: 'center'
                }} >
                    <View style={{ marginTop: 9, }}>
                        <Image
                            source={require("../../../assets/home4.png")}
                            style={{
                                width: imageWidth,
                                height: imageHeight,
                            }}
                        />
                        <Text style={{
                            fontSize: 15, alignItems: "center", fontWeight: 600, padding: 2, paddingHorizontal: 3
                        }} >Test Policies</Text>
                    </View>

                </Card>
            </TouchableOpacity >
        </>
    )
}
export default OpcDocCard