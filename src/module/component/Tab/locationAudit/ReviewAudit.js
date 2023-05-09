import { useEffect } from "react"
import { View, ScrollView } from "react-native"
import ErrorDialogbox from "../../../common/Alert"
import { Button, ListItem, Text } from "@rneui/base"

const ReviewAudit = ({ navigation }) => {
    const { confirmAlert, CompletedAlertBox } = ErrorDialogbox()

    useEffect(() => {
        confirmAlert()
    }, []);
    const onConfirm = () => {
        CompletedAlertBox(goLocatin);
    }
    const goLocatin = () => {
        navigation.navigate('Locatin');
    }
    return (
        <>
            <ScrollView>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                    <Text style={{ color: "white" }}>REVIEW</Text>
                </View>
                <View style={{ backgroundColor: 'white' }}>
                    <ListItem onPress={(() => {
                        navigation.navigate('PreviewMode')
                    })}>
                        <ListItem.Content>
                            <ListItem.Title>FIRST GROUP</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron></ListItem.Chevron>
                    </ListItem>
                </View>
            </ScrollView >
            <View style={{ padding: 20, backgroundColor: 'white' }}>
                <Button size="lg" buttonStyle={{ borderRadius: 10, backgroundColor: "#317F91" }} onPress={() => {
                    onConfirm()
                }}>Confirm</Button>
            </View>
        </>
    )
}
export default ReviewAudit