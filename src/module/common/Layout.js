import { useTheme } from "@rneui/themed"
import { View, Text, Animated, ScrollView } from "react-native"
import UseUtility from "./hook/UseUtility";
import { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Divider } from "@rneui/base";

const Layout = (props) => {
    const offset = useRef(new Animated.Value(0)).current;

    const { color, children, isScroll } = props;
    const { theme } = useTheme();
    const bgColor = color ? color : theme.colors.primary;
    const { shadeColor } = UseUtility();
    const bgColorLight = shadeColor(bgColor, 0.9);

    const AnimatedHeader = ({ animatedValue }) => {
        const insets = useSafeAreaInsets();
        const HEADER_HEIGHT = 100;
        const headerHeight = animatedValue.interpolate({
            inputRange: [0, 0],
            outputRange: [HEADER_HEIGHT + insets.top, insets.top + 20],
            extrapolate: 'clamp'
        });
        return (
            <Animated.View
                style={{
                    height: headerHeight,
                    backgroundColor: theme.colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Divider />
                <Text style={{ color: "white", fontSize: 20 }}>{props.title}</Text>
            </Animated.View>
        );
    };
    return (
        <>

            <AnimatedHeader animatedValue={offset} />
            <View style={{ backgroundColor: bgColor, flex: 1 }}>
                {
                    isScroll ? (
                        <ScrollView showsVerticalScrollIndicator={false}
                            style={{
                                borderBottomColor: 30,
                                backgroundColor: bgColorLight,
                                borderTopRightRadius: 40,
                                borderTopLeftRadius: 40,
                                paddingTop: 20,
                                paddingBottom: 20,
                            }}

                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { y: offset } } }],
                                { useNativeDriver: false }

                            )}>
                            <View style={{ flex: 6, paddingBottom: 30 }}>
                                {children}
                            </View>
                        </ScrollView>
                    ) :
                        <View
                            style={{
                                borderBottomColor: 30,
                                backgroundColor: bgColorLight,
                                borderTopRightRadius: 40,
                                borderTopLeftRadius: 40,
                                paddingTop: 20,
                                paddingBottom: 20,
                                flex: 1
                            }}>
                            <View style={{ flex: 6, paddingBottom: 30 }}>
                                {children}
                            </View>
                        </View>
                }
            </View>
        </>
    )
}
export default Layout   
