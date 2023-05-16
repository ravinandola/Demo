import ModalWrapper from "../../common/ModalWebviewWrapper"
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { Button, Input, Text } from '@rneui/themed';
import { Link } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import LocalStorage from '../../common/LocalStorage';
import { UseVisible } from '../../common/hook/useVisible';
import { Dialog, Image } from '@rneui/base';
import ErrorDialogbox from "../../common/Alert";

const DomainScreen = ({ navigation }) => {
    const { visible: show, show: showModal, hide: hideModal, } = UseVisible();
    const { visible: showErr, show: showErrModal, hide: hideErrModal, } = UseVisible();
    const { showAlert, showAlertWithHelp } = ErrorDialogbox()
    useEffect(() => {
        showModal()
    }, []);

    const onSubmitDomain = (value) => {
        if (value.domain == "") {
            showAlert()
            return;
        }
        if (value.domain == "Int" || value.domain == "Int2") {
            navigation.navigate('Login');
            hideModal();
        } else {
            showAlertWithHelp();
        }

    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <Dialog
                    isVisible={show}
                    onBackdropPress={showModal}
                    overlayStyle={{ backgroundColor: 'white', height: 'auto', borderRadius: 10 }}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require("../../../../assets/iconwithname.png")
                            } />
                        <Text style={{ paddingTop: 35 }}>Enter your OP Central domain</Text>
                    </View>
                    <View style={styles.details}>
                        <Formik
                            initialValues={{ domain: '' }}
                            onSubmit={onSubmitDomain}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
                                    <Input
                                        label="domain"
                                        placeholder="Enter your domain"
                                        onChangeText={handleChange('domain')}
                                        onBlur={handleBlur('domain')}
                                        value={values.domain}
                                    />

                                    <Button title="Next"
                                        buttonStyle={{
                                            backgroundColor: 'green',
                                            borderWidth: 2,
                                            borderColor: 'white',
                                            borderRadius: 8,
                                            marginBottom: 20
                                        }}
                                        onPress={handleSubmit} />
                                </>
                            )}
                        </Formik>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}><Text style={{ textDecorationLine: "underline", color: 'red' }}>Finding Your Domain</Text></View>
                    </View>
                </Dialog>
            </View>

        </>
    )
};
const styles = StyleSheet.create({
    details: {
        marginTop: 30
    },
    tinyLogo: {
        width: 200,
        marginTop: 30,
        height: 56,
        textAlign: 'cenetr'
    },
});

export default DomainScreen