import { Text } from "@rneui/base";
import { useState } from "react";
import ImageView from "react-native-image-viewing";
import { View } from "react-native";

const ImageViewElement = ({ visible, images, onClose, onImageIndexChange }) => {
    return (
        <>
            <View>
                <ImageView
                    images={images}
                    imageIndex={0}
                    visible={visible}
                    onImageIndexChange={onImageIndexChange}
                    animationType={'slide'}
                    presentationStyle={'fullScreen'}
                    backgroundColor={"black"}
                    onRequestClose={onClose}
                    // FooterComponent={() => (
                    //     <View>
                    //         <Text >{"ccc"}</Text>
                    //     </View>
                    // )}
                />
            </View>
        </>
    )

}

export default ImageViewElement