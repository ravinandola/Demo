import { WebView } from 'react-native-webview';
import { View } from 'react-native';

const ModalWebviewWrapper = ({link}) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <WebView
                    source={{ uri: link }}
                />
            </View>
        </>
    )
}
export default ModalWebviewWrapper