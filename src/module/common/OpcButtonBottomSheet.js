import { BottomSheet } from '@rneui/themed';
import OpcListItem from "./OpcListItem"
import IconWrapper from "./IconWrapper"
import { View, useSafeAreaInsets } from "react-native"

const OpcButtonBottomSheet = ({ iconList, list, hanldeList, isVisible }) => {
    const insets = useSafeAreaInsets();

    return (
        <>
            <BottomSheet isVisible={isVisible} modalProps={{ presentationStyle: "overFullScreen", animationType: "fade" }}>
                <View style={{ paddingBottom: insets.bottom }}>
                    {list.map((l, i) => {
                        return <>
                            <OpcListItem
                                style={{ borderRadius: 10 }}
                                key={i}
                                containerStyle={{ ...l.containerStyle, borderRadius: 6, marginRight: 7, marginLeft: 7, marginBottom: 7, alignItems: "center" }}
                                onPress={() => { hanldeList(l.slug) }}
                            >
                                {iconList && <IconWrapper name={iconList[i]} />}
                                <OpcListItem.Content>
                                    <OpcListItem.Title style={l.titleStyle}>{l.title}</OpcListItem.Title>
                                </OpcListItem.Content>
                            </OpcListItem>
                        </>

                    })}
                </View>
            </BottomSheet>
        </>
    )
}
export default OpcButtonBottomSheet