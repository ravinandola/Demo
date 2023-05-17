import { useTheme } from "@rneui/themed"
import { View, Text, ScrollView } from "react-native"
import UseUtility from "./hook/UseUtility";

const Layout = (props) => {
    const { color } = props;
    const { theme } = useTheme();
    const bgColor = color ? color : theme.colors.primary;
    const { shadeColor } = UseUtility();
    const bgColorLight = shadeColor(bgColor, 0.9);
    return (
        <>

            <View style={{ backgroundColor: bgColor, display: 'flex', flex: 1 }}>
                <View style={{ alignItems: 'center', padding: 50, backgroundColor: 'traspernt' }}>
                    <Text style={{ color: "white", fontSize: 20 }}>{props.title}</Text>
                </View>
                <View style={{ backgroundColor: bgColorLight, flex: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 15 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {props.children}
                    </ScrollView>
                </View>
            </View>
        </>
    )
}
export default Layout   
