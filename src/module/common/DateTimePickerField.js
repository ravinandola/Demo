import React from 'react';
import { Button, Text, View } from 'react-native';
import { useFormikContext, useField } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateTimePickerField = ({ name, label }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const isVisible = meta.touched && meta.error;

  const handleConfirm = (date) => {
    setFieldValue(name, date);
  };

  const formattedDate = field.value ? field.value.toString() : '';

  return (
    <View>
      <Button title={label} onPress={() => setShowPicker(true)} />
      {formattedDate !== '' && <Text>{formattedDate}</Text>}
      {isVisible && (
        <DateTimePickerModal
          isVisible={isVisible}
          mode="datetime"
          value={field.value || new Date()}
          display="spinner"
          onConfirm={handleConfirm}
          onCancel={() => setShowPicker(false)}
        />
      )}
      {isVisible && <Text>{meta.error ? meta.error.toString() : ''}</Text>}
    </View>
  );
};

export default DateTimePickerField;
