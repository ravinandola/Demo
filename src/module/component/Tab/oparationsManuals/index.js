import { ScrollView, View } from "react-native"
import Layout from "../../../common/Layout";
import DocCardList from "../../../common/DocCardList";
const OparationsManuals = ({ navigation }) => {

    const hanldeChnage = () => {
        navigation.navigate('Policie');
    }
    return (
        <>
            <Layout title={'OPREACTIONS MANUALS'}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: 'traspernt',
                        flexWrap: 'wrap',
                        alignItems: 'center'

                    }}>
                        <DocCardList />

                    </View >
                </ScrollView>
            </Layout>
        </>
    )
}
export default OparationsManuals