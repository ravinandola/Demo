import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import { Button, Input, Text } from '@rneui/themed';
import LocalStorage from '../../common/LocalStorage';
import { UseVisible } from '../../common/hook/useVisible';
import { Dialog, Image } from '@rneui/base';
import ErrorDialogbox from '../../common/Alert';
const LoginScreen = ({ navigation }) => {
    const { visible: show, show: showModal, hide: hideModal, } = UseVisible();
    const { showAlert, showAlertWithHelp } = ErrorDialogbox()

    useEffect(() => {
        showModal()
    }, []);

    const onSubmit = (value) => {
        if (value.username == "" || value.password == "") {
            showAlert();
        } else {
            navigation.navigate('Main');
            hideModal();
        };

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
                        <Text style={{ paddingTop: 35 }}>Enter your login details</Text>
                    </View>
                    <View style={styles.details}>
                        <Formik
                            initialValues={{ username: '', password: '', }}
                            onSubmit={onSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
                                    <Input
                                        label="Username"
                                        placeholder="Enter your username"
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values.email}
                                    />
                                    <Input
                                        label="Password"
                                        placeholder="Enter your password"
                                        secureTextEntry
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    />

                                    <Button title="Sing In"
                                        buttonStyle={{
                                            backgroundColor: 'green',
                                            borderWidth: 2,
                                            borderColor: 'white',
                                            borderRadius: 8,
                                            marginBottom: 20
                                        }}

                                        titleStyle={{ fontWeight: '' }} onPress={handleSubmit} />
                                </>
                            )}
                        </Formik>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}><Text style={{ textDecorationLine: "underline", color: 'red' }}>Forgot Password</Text></View>
                    </View>
                </Dialog>
            </View >
        </>



    );
};

const styles = StyleSheet.create({
    details: {
        marginTop: 30
    },
    tinyLogo: {
        width: 200,
        marginTop: 30,
        height: 58,
        textAlign: 'cenetr'
    },
});

export default LoginScreen;
