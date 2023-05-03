import { Text } from "@rneui/base"
import { View, StyleSheet } from "react-native"

const Home = () => {

    return (<>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>

    </>)
};
const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
export default Home