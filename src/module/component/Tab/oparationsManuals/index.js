import { ScrollView, View } from "react-native"
import Layout from "../../../common/Layout";
import DocCardList from "../../../common/DocCardList";
const OparationsManuals = ({ navigation }) => {

    const hanldeChnage = () => {
        navigation.navigate('Html');
    }
    return (
        <>
            <Layout title={'OPREACTIONS MANUALS'} isScroll={true}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    backgroundColor: 'traspernt',
                    flexWrap: 'wrap',
                    alignItems: 'center'

                }}>
                    <DocCardList hanldePolicie={() => {
                        hanldeChnage()
                    }} />

                </View >
            </Layout>
        </>
    )
}
export default OparationsManuals