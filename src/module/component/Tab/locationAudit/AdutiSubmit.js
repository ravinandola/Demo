import { useState } from "react"
import { StyleSheet, Picker, DatePickerIOS, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { View } from "react-native";
import { Button, CheckBox, Icon } from "@rneui/base/dist";
import { UseVisible } from "../../../common/hook/useVisible";
import moment from "moment";
import ErrorDialogbox from "../../../common/Alert";

const AdutiSubmit = ({ route, navigation }) => {
    let audit;
    if (route.params) {
        audit = route.params.item
    }
    const [questionVlaue, setQuestion] = useState(audit ? 'test1' : '');
    const [locationVlaue, setLocation] = useState(audit ? 'surat' : '');
    const { showAlert, showAlertWithHelp } = ErrorDialogbox()

    const [date, setDate] = useState(audit && moment().format('MMMM Do YYYY, h:mm:ss a'))
    const { visible: show, show: showModal, hide: hideModal, } = UseVisible();
    const [checked, setChecked] = useState(false);

    const question = [
        { label: 'Test1', value: 'test1' },
        { label: 'Test2', value: 'test2' },
        { label: 'Test3', value: 'test3' },
        { label: 'Test4', value: 'test4' },
        { label: 'Test5', value: 'test5' },

    ];
    const locatin = [
        { label: 'Surat', value: 'surat' },
        { label: 'Baroda', value: 'baroda' },
        { label: 'Head Ofice', value: 'head office' },
        { label: 'Maroli', value: 'maroli' },

    ]
    const handleDateConfirm = (value) => {
        let date = moment(value).format('MMMM Do YYYY, h:mm:ss a');
        setDate(date);
        hideModal()
    };

    const handleToggle = () => {
        setChecked(!checked);
    };
    const onAuditSubmit = () => {
        if (questionVlaue == "" || locationVlaue == "" || date == "" || !checked) {
            showAlert();
        } else {
            navigation.navigate('MangeAudit');
        }
    }
    return (
        <>
            <View style={{ height: 700, backgroundColor: "white" }}>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                    <Text style={{ color: "white" }}>NEW SUBMISSION</Text>
                </View>
                <View style={{ marginTop: 20, marginEnd: 20, marginLeft: 20 }}>
                    <DateTimePickerModal
                        isVisible={show}
                        mode="datetime"
                        onConfirm={handleDateConfirm}
                        onCancel={() => {
                            hideModal()
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>Questionnaire:*</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setQuestion(value)}
                        items={question}
                        value={questionVlaue}
                        placeholder={{ label: '---Select an option---', value: null }}
                        style={select}
                        useNativeAndroidPickerStyle={false}
                        Icon={() => {
                            return <Icon type="material-community" name="chevron-down" size={24} color="gray" />;
                        }}
                    />
                </View>

                <View style={{ marginTop: 20, marginEnd: 20, marginLeft: 20 }}>
                    <Text style={{ marginBottom: 10 }}>Location:*</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setLocation(value)}
                        items={locatin}
                        value={locationVlaue}
                        placeholder={{ label: '--Select an option---', value: null }}
                        style={select}
                        useNativeAndroidPickerStyle={false}
                        Icon={() => {
                            return <Icon type="material-community" name="chevron-down" size={24} color="gray" />;
                        }}
                    />
                </View>
                <View style={{ marginTop: 20, marginEnd: 20, marginLeft: 20 }}>
                    <Text style={{ marginBottom: 10 }}>Date:*</Text>
                    <Text style={{ color: '#cccccc', marginBottom: 10 }}>The date Which you conducted the audit</Text>
                    <TouchableOpacity onPress={() => { showModal() }}>
                        <View >
                            {!date ? <Text style={styles.date} >---Selct Date---</Text> : <Text style={styles.date} >{date}</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, marginLeft: 2 }}>
                    <CheckBox
                        title='I understand let`s get started'
                        checked={checked}
                        onPress={handleToggle}
                    />
                </View>
                <View style={{ marginTop: 20, marginEnd: 40, marginLeft: 40 }}>
                    <Button title="Continue"
                        buttonStyle={{
                            backgroundColor: '#317F91',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 8,
                            marginBottom: 20
                        }}

                        titleStyle={{ fontWeight: '' }} onPress={() => { onAuditSubmit() }} />
                </View>
            </View >

        </>

    )
}
const select = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: '#cccccc',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: '#cccccc',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    iconContainer: {
        top: 10,
        right: 12,
    },
});

const styles = StyleSheet.create({
    date: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: '#cccccc',
        paddingRight: 30,
    }
})

export default AdutiSubmit