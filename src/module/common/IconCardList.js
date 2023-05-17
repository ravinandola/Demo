import { TouchableOpacity, Dimensions } from "react-native";
import { Card, Text } from "@rneui/base"
import IconWrapper from "./IconWrapper";
import UseUtility from "./hook/UseUtility";
import OpcCard from "./OpcCard";

const IconCardList = ({ halndleLink }) => {

    let cardList = [
        { icon: 'google-chrome', title: "Expo Link View Expo Link View", slug: "expo" },
        { icon: 'timer', slug: "expo", title: "Import" },
        { icon: "timer", title: "Export", slug: "expo" },
        { icon: 'timer', title: 'expo', slug: 'reactnavigation' },
        { icon: 'google-chrome', title: "Expo Link View Expo Link View", slug: "expo" },
        { icon: 'timer', slug: "expo", title: "Import" },
        { icon: "timer", title: "Export", slug: "expo" },
        { icon: 'timer', title: 'expo', slug: 'reactnavigation' }
    ];
    return (
        <>
            {
                cardList.map((item, i) => {
                    return <OpcCard icon={item.icon} item={item}
                        onPress={(obj) => { halndleLink(obj.slug) }} key={i} />
                })
            }

        </>
    )
}
export default IconCardList