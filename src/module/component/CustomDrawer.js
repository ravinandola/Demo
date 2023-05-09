import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    const handleOptionPress = (option) => {
        props.navigation.navigate('Home');
    };

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Option 1" onPress={() => handleOptionPress(1)} />
            <DrawerItem label="Option 2" onPress={() => handleOptionPress(2)} />
            <DrawerItem label="Option 3" onPress={() => handleOptionPress(3)} />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;