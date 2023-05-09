import { useEffect } from "react";
import ErrorDialogbox from "../../../common/Alert";
import { View, ScrollView } from "react-native"
import { Button, ListItem, Text, CheckBox, Divider } from "@rneui/base"

const PreviewMode = () => {
    const { PreviewMode } = ErrorDialogbox()

    useEffect(() => {
        PreviewMode();
    }, []);

    return (
        <>
            <View style={{ height: 'auto' }}>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                    <Text style={{ color: "white" }}>First Group</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 16 }}>
                    <Text style={{ marginLeft: 16 }}>Yes and No type</Text>
                    <CheckBox
                        checked={false}
                        title="Yes"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        checked={true}
                        title="No"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View >
                <View style={{ marginTop: 20, marginLeft: 16 }}>
                    <Text style={{ marginLeft: 16 }}>True and false</Text>
                    <CheckBox
                        checked={true}
                        title="Yes"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        checked={false}
                        title="No"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View >
                <View style={{ marginTop: 20, marginLeft: 16 }}>
                    <Text style={{ marginLeft: 16 }}>CheckBox</Text>
                    <CheckBox title="check box1" checked={true} />
                    <CheckBox title="check box2" checked={false} />
                </View >
                <Divider style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }} />
            </View>
        </>
    )
}
export default PreviewMode