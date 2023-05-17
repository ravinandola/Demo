import { TouchableOpacity, Dimensions } from "react-native";
import { Card, Image, Text } from "@rneui/base"
import UseUtility from "./hook/UseUtility";

const OpcDocCard = () => {
    let value = [1, 2, 4, 4, 6, 7, 8, 9, 0, , 656, 56, 5, 65, 65, 6, 56, 3, 1];
    let width = Dimensions.get('window').width / 2.6;
    let height = Dimensions.get('window').height / 7;
    let imageWidth = Dimensions.get('window').width / 3;
    let imageHeight = Dimensions.get('window').height / 9;
    const { shadowColor } = UseUtility();

    return (
        <>
            <TouchableOpacity >
                <Card containerStyle={{
                    borderRadius: 9,
                    borderWidth: 0,
                    shadowColor: shadowColor(),
                    shadowOffset: {
                        width: 3,
                        height: 3,
                    },
                    padding: 10,
                    width,
                    height:width,
                    marginBottom: 10
                }} >
                    <Image
                        source={require("../../../assets/home3.png")}
                        style={{
                            width: imageWidth,
                            height: imageWidth,
                            margin: 2,
                            borderRadius: 11,
                            alignItems:'center'
                        }}
                    />
                </Card>
            </TouchableOpacity>
        </>
    )
}
export default OpcDocCard