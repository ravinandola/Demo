import { TouchableOpacity, Dimensions, View } from "react-native";
import { Card, Image, Text } from "@rneui/base"
import UseUtility from "./hook/UseUtility";

const OpcDocCard = () => {
    let value = [1, 2, 4, 4, 6, 7, 8, 9, 0, , 656, 56, 5, 65, 65, 6, 56, 3, 1];
    let width = Dimensions.get('window').width / 2.6;
    let height = Dimensions.get('window').height / 6;
    let imageWidth = width - 15;
    let imageHeight = height - 17;

    const { shadowColor } = UseUtility();

    return (
        <>
            <TouchableOpacity >
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
                    <View style={{ marginTop: 9 }}>
                        <Image
                            source={require("../../../assets/home4.png")}
                            style={{
                                width: imageWidth,
                                height: imageHeight,
                            }}
                        />
                        <Text style={{
                            zIndex: 1, position: 'absolute', fontSize: 15, width: imageWidth, fontWeight: 600, padding: 2, paddingHorizontal: 3, backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        }} >Test Ravi</Text>
                    </View>

                </Card>
            </TouchableOpacity >
        </>
    )
}
export default OpcDocCard