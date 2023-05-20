import { Divider, Text, Icon } from "@rneui/base"
import { ScrollView, TouchableOpacity } from "react-native"
import { View } from "react-native"
import ImageViewElement from "../../../common/ImageViewElement";
import { useState } from "react";
import { Button } from "@rneui/themed";
import Layout from "../../../common/Layout";
import IconCardList from "../../../common/IconCardList";

const images = [
    {
        uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",

    },
    {
        uri: "https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg",

    },
    {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgr4U20-p8WCE-ykuIEFWE5KOs93C1o9NqA&usqp=CAU",
    }
];
const Dashboard = ({ navigation }) => {
    const [visible, setIsVisible] = useState(false);
    const [currentImageIndex, setImageIndex] = useState(0);

    const halndleLink = (type) => {
        switch (type) {
            case 'expo': navigation.navigate('Webview', {
                link: 'https://expo.dev/'
            })
            case 'reactnavigation': navigation.navigate('Webview', {
                link: 'https://reactnavigation.org/'
            })
                break;
        }
    };

    const ImageElement = (
        <ImageViewElement visible={visible} images={images} currentImageIndex={currentImageIndex} onClose={() => {
            setIsVisible(false)
        }} onImageIndexChange={(index) => {
            setImageIndex(currentImageIndex)
        }} />
    );

    return (
        <>
            {visible && ImageElement}
            <Layout title={"DASHBOARD"} isScroll={true}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: 'traspernt',
                        flexWrap: 'wrap',
                    }} >
                        <IconCardList halndleLink={(slug) => {
                            halndleLink(slug)
                        }} />
                    </View>
            </Layout>
        </>
    )
}
export default Dashboard