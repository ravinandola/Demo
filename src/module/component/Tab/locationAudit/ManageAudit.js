import { Text } from "@rneui/base"
import { Button, CheckBox, Divider } from "@rneui/base/dist";
import { useState } from "react";
import { View } from "react-native"
import { UseVisible } from "../../../common/hook/useVisible";
import ErrorDialogbox from "../../../common/Alert";

const ManageAudit = ({ navigation, route }) => {
    console.log(route)
    const [yes, setyes] = useState(0);
    const [trueFlase, setTrueFlase] = useState()
    const [oneCheck, setOneCheck] = useState(false);
    const [twoCheck, setTwoCheck] = useState(false)
    const { showAlert, showAlertWithHelp } = ErrorDialogbox()

    const handleToggle = (name) => {
        if (name == 'one') {
            setOneCheck(!oneCheck)
        } else {
            setTwoCheck(!twoCheck)
        }
    };
    const onNext = () => {
        if (yes == 0 || (!oneCheck && !twoCheck) || !trueFlase) {
            showAlert();
        } else {
            navigation.navigate('ReviewAudit');
        }
    }
    return (
        <>

            <View style={{ height: 'auto' }}>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                    <Text style={{ color: "white" }}>First Group</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 16 }}>
                    <Text style={{ marginLeft: 16 }}>Yes and No type</Text>
                    <CheckBox
                        checked={yes === 1}
                        onPress={() => setyes(1)}
                        title="Yes"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        checked={yes === 2}
                        onPress={() => setyes(2)}
                        title="No"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View >
                <View style={{ marginTop: 20, marginLeft: 16 }}>
                    <Text style={{ marginLeft: 16 }}>True and false</Text>
                    <CheckBox
                        checked={trueFlase === 1}
                        onPress={() => setTrueFlase(1)}
                        title="Yes"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        checked={trueFlase === 2}
                        onPress={() => setTrueFlase(2)}
                        title="No"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View >
                <View style={{ marginTop: 20, marginLeft: 16 }}>
                    <Text style={{ marginLeft: 16 }}>CheckBox</Text>
                    <CheckBox title="check box1" checked={oneCheck}
                        onPress={() => { handleToggle('one') }} />
                    <CheckBox title="check box2" checked={twoCheck}
                        onPress={() => { handleToggle('two') }} />
                </View >
                <Divider style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title="Next"
                    buttonStyle={{
                        backgroundColor: 'green',
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 8,
                        marginBottom: 20
                    }}

                    titleStyle={{ fontWeight: '' }} onPress={() => { onNext() }} />
                <Button title="Save Progress"
                    buttonStyle={{
                        backgroundColor: 'white',
                        borderWidth: 2,
                        color: 'pink',
                        borderColor: 'black',
                        borderRadius: 8,
                        marginBottom: 20
                    }}

                    titleStyle={{ color: "black" }} onPress={() => { }} />


            </View>

        </>
    )
}
export default ManageAudit