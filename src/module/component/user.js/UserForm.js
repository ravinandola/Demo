import React, { useRef, useState } from 'react';
import { View, Keyboard, TouchableOpacity } from 'react-native';
import { Field, Formik } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, Divider, Input } from '@rneui/themed';
import moment from 'moment';
import IconWrapper from '../../common/IconWrapper';
import Layout from '../../common/Layout';
import useDatabase from '../../common/hook/UseDatabase';
import { UseVisible } from '../../common/hook/useVisible';
import { Text } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import { values } from 'lodash';


const TextField = ({ field, placeholder, mode, icon, label, form, value }) => {
    return (
        <View>
            <Input
                placeholder={placeholder}
                label={label}
                inputMode={mode}
                value={value}
                onChangeText={(text) => {
                    form.setFieldValue(field.name, text);
                }}
                rightIcon={<IconWrapper name={icon} size={20} />}
            />
        </View>
    )
}

const DateTimePickerField = ({ field, form, ...props }) => {
    const { visible: show, show: showModal, hide: hideModal, } = UseVisible();
    let date = form.values.date ? moment(form.values.date).format('ll') : ""
    const [currentDate, setCurrentDate] = useState(!!date ? moment(date) : new Date());

    const handleConfirm = (date) => {
        let dateF = moment(date).format('YYYY-MM-DD')
        form.setFieldValue(field.name, dateF);
        hideModal();
        Keyboard.dismiss()
    };
    return (
        <View>
            <Input
                placeholder="Select Date..."
                rightIcon={<IconWrapper name={'clipboard-text-clock'} size={20} />}
                value={date}
                label='Date'
                onPressIn={(() => {
                    showModal()
                })}
                caretHidden={true}
                onFocus={() => {
                    Keyboard.dismiss();
                    showModal()
                }
                }
            />
            <DateTimePickerModal
                isVisible={show}
                mode="datetime"
                date={currentDate}
                onChange={(date) => {
                    setCurrentDate(date)
                }}
                onConfirm={handleConfirm}
                onCancel={hideModal}
            />
        </View>
    );
};

// const PickerField = ({ label, options, form, field }) => {
//     const { visible: show, show: showModal, hide: hideModal, } = UseVisible();
//     const handleChange = (value) => {
//         form.setFieldValue(field.name, value);
//     };
//     const selectElement = (
//         <RNPickerSelect
//             isVisible={show}
//             value={field.value}
//             onValueChange={handleChange}
//             items={options}
//             placeholder={" "}
//         />
//     )
//     return (
//         <View>

//             <RNPickerSelect
//                 value={field.value}
//                 onValueChange={handleChange}
//                 items={options}
//                 placeholder={" "}
//             />

//         </View>
//     );
// };
const initialValues = {
    firstname: '', lastname: '', phone: '', email: '', date: ''
}
const UserForm = ({ navigation }) => {
    let user = useRoute();
    const [res] = useState(!!user.params?.item ? user.params?.item : initialValues);
    console.log("useru", user.params)
    const { addUser, userList, deleteUser, getUserById, userById, updateUser } = useDatabase();
    const [todos, setTodos] = useState([]);

    const submitUser = async (userObj) => {
        console.log("userObj", userObj)
        if (user.params) {
            updateUser(userObj);
            navigation.navigate('list');
        } else {
            addUser(userObj);
            navigation.navigate('list');
        }
    }
    const handleAction = async (id) => {
        deleteUser(id)
        navigation.navigate('list');

    }
    return (
        <Layout title={user.params ? "EDIT USER" : 'ADD NEW USER'} isScroll={true}>
            <View style={{ marginTop: 20, marginEnd: 15, marginLeft: 15 }}>
                {
                    user.params && <>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            backgroundColor: 'traspernt',
                            flexWrap: 'wrap',
                            margin: 10
                        }}>
                            <View>
                                <TouchableOpacity onPress={() => { handleAction(res.user_id) }}>
                                    <IconWrapper name="delete" color={"red"} size={"26"}></IconWrapper>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <Divider style={{ marginBottom: 15 }} />
                    </>
                }
                <Formik
                    initialValues={res}
                    onSubmit={submitUser}
                >
                    {({ handleSubmit, values }) => (
                        <View>
                            <Field
                                name="firstname"
                                component={TextField}
                                label="First Name"
                                placeholder="Enter Firstname"
                                icon={'account'}
                                mode="text"
                                value={values.firstname}
                                required

                            />
                            <Field
                                name="lastname"
                                component={TextField}
                                label="Last Name"
                                placeholder="Enter Lastname"
                                icon={'account'}
                                mode="text"
                                value={values.lastname}

                            />
                            <Field
                                name="phone"
                                component={TextField}
                                label="Phone No"
                                placeholder="Enter Phone..."
                                icon={'phone'}
                                mode="tel"
                                value={values.phone.toString()}

                            />
                            <Field
                                name="email"
                                component={TextField}
                                label="Email Address"
                                placeholder="Enter Email..."
                                icon={'email'}
                                mode="email"
                                value={values.email}

                            />
                            <Field
                                name="date"
                                component={DateTimePickerField}
                                label="Start Date"
                                placeholder="Select Date"
                                icon={'clipboard-text-clock'}
                            />
                            <Button title="save"
                                buttonStyle={{
                                    backgroundColor: 'green',
                                    borderWidth: 2,
                                    borderRadius: 8,
                                    marginBottom: 20
                                }}

                                titleStyle={{ fontWeight: '' }} onPress={handleSubmit} />
                        </View>
                    )}
                </Formik>
            </View>
        </Layout >
    );
};
export default UserForm