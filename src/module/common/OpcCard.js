import { TouchableOpacity, Dimensions } from "react-native";
import { Card, Text } from "@rneui/base"
import IconWrapper from "./IconWrapper";
import UseUtility from "./hook/UseUtility";

const OpcCard = (props) => {
    let width = Dimensions.get('window').width / 2.6;
    let height = Dimensions.get('window').width / 3;
    const { shadowColor } = UseUtility();
    const halndleLink = () => {
        if (props.onPress) {
            props.onPress(props.item)
        }
    }
    return (<>
        <TouchableOpacity onPress={halndleLink}>
            <Card containerStyle={{
                borderRadius: 9,
                borderWidth: 0,
                shadowColor: shadowColor(),
                shadowOffset: {
                    width: 3,
                    height: 3,
                }, padding: 10,
                width,
                height,
                marginBottom: 10
            }} >
                <IconWrapper size={50} name={props.icon} style={{ paddingTop: 10 }}></IconWrapper>
                <Text style={{ paddingTop: 15, textAlign: "center" }}>{props?.item.title}</Text>
            </Card>
        </TouchableOpacity>
    </>)
}

OpcCard.defaultProps = {
    icon: "google-chrome",
}
export default OpcCard;