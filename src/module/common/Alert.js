import { Alert } from "react-native";

const ErrorDialogbox = () => {

    const showAlert = () => {
        Alert.alert(
            'Massing Field',
            'Please enter valid details',
            [
                { text: 'OK' },
            ]
        );
    }

    const showAlertWithHelp = () => {
        Alert.alert(
            'Invalid Domain',
            'The domain you entered is invalid please try entering again',
            [
                { text: 'cancel' },
                { text: 'Help', onPress: () => { } }
            ]
        );
    }
    const confirmAlert = () => {
        Alert.alert(
            'Please Confirm',
            'Review the details of your submission and click on the complete button to confirm',
            [
                { text: 'OK' },
            ]
        )
    }
    const CompletedAlertBox = (cb) => {
        Alert.alert(
            'Completed',
            'thank you of Audit for area manage submiddion at Head Office',
            [
                { text: 'OK', onPress: () => { cb() } },
            ]
        )
    }
    const PreviewMode = () => {
        Alert.alert(
            'Preview Mode',
            'You can`t edit this details',
        )
    }
    return {
        showAlert,
        showAlertWithHelp,
        confirmAlert,
        CompletedAlertBox,
        PreviewMode
    };

}

export default ErrorDialogbox