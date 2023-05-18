import React, { useState } from 'react';
import { View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const FilScreen = () => {
    const [videoSource, setvideoSource] = useState('');

    const pickImage = async (type) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: type,
            allowsEditing: true,
            quality: 1,
            base64: true,
        });
        setvideoSource(result.assets[0].base64)
        console.log(result)
    };

    const pickDocument = async (type) => {
        let result = await DocumentPicker.getDocumentAsync({
            // type: 'application/pdf',
            type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });
        console.log(result);
        // Do something with the selected document
    };

    return (
        <View style={{ display: 'flex', alignItems: 'center', marginTop: 50, justifyContent: 'between' }}>
            <Button title="select imag" onPress={() => { pickImage('Images') }} />
            <Button title="select Video" onPress={() => { pickImage("Videos") }} />
            <Button title="Pick Document" onPress={pickDocument} />
        </View>
    );
}
export default FilScreen