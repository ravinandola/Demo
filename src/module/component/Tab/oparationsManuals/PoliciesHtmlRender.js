import Layout from "../../../common/Layout"
import React from 'react';
import { useWindowDimensions, View, Dimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { } from "react-native";
const PoliciesHtmlRender = () => {
    const { width } = useWindowDimensions();

    const source = {
        html: `
        `

    };

    return (
        <>
            <Layout title={'HTML'} isScroll={true}>
                <View>
                    <RenderHtml
                        contentWidth={300}
                        source={source}
                        conhi
                    />
                </View>

            </Layout>
        </>
    )
}
export default PoliciesHtmlRender