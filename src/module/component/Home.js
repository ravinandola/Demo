
import { Button, Icon, Image, ListItem, PricingCard, Text } from "@rneui/base"
import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native"


const Home = ({ navigation }) => {
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <Icon style={{ paddingRight: 20 }} name="filter"></Icon>
    //         ),
    //         headerLeft: () => (
    //             <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
    //                 <Image
    //                     style={{ width: 30, height: 30, marginRight: 10 }} onPress={() => navigation.openDrawer()} />
    //                 <Text style={{
    //                     fontSize: 18,
    //                     fontWeight: '600',
    //                 }}>Op Central</Text>
    //             </View>
    //         ),
    //     });
    // }, [navigation]);

    return (<>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <PricingCard
                color="#4f9deb"
                title="Free"
                price="$0"
                info={['1 User', 'Basic Support', 'All Core Features']}
                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
            />
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