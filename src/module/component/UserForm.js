import React from 'react';
import { Button, Text, View } from 'react-native';
import { Field, Formik } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Layout from '../common/Layout';
import { UseVisible } from '../common/hook/useVisible';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ModalDropdown from 'react-native-modal-dropdown';

const DateTimePickerField = ({ field, form, ...props }) => {
    const { visible: show, show: showModal, hide: hideModal, } = UseVisible();

    const handleConfirm = (date) => {
        form.setFieldValue(field.name, date);
        hideModal();
    };

    const formattedDate = field.value ? field.value.toString() : '';

    return (
        <View>
            <View style={{ marginTop: 20, marginEnd: 20, marginLeft: 20 }}>
                <Text style={{ marginBottom: 10 }}>Date:*</Text>
                <View >
                    <TextInput
                        placeholder="Enter text"
                        onChange={() => {
                            showModal()
                        }}
                    />
                </View>
            </View>
            <DateTimePickerModal
                isVisible={show}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideModal}
            />
            {show && <Text>{form.errors[field.name]}</Text>}
        </View>
    );
};

const PickerField = ({ label, options, form, field }) => {
    const handleChange = (value) => {
        form.setFieldValue(field.name, value);
    };

    return (
        <View>
            <Text>{label}</Text>
            <RNPickerSelect
                value={field.value}
                onValueChange={handleChange}
                items={options}
            />
        </View>
    );
};
const UserFrom = () => {
    return (
        <Layout title={"DASHBOARD"} isScroll={true}>
            <Formik
                initialValues={{ date: null, fruit: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleSubmit }) => (
                    <View>
                        <Field
                            name="date"
                            component={DateTimePickerField}
                            label="Select Date"
                        />
                        <Field
                            component={PickerField}
                            name="fruit"
                            label="Fruit"
                            options={[
                                { label: 'Apple', value: 'apple' },
                                { label: 'Banana', value: 'banana' },
                                { label: 'Orange', value: 'orange' },
                            ]}
                        />
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </Layout>
    );
};
export default UserFrom