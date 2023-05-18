import { ButtonGroup, useTheme } from "@rneui/themed"

const OpcButtonGroup = ({index,updateIndex,buttons}) => {
    const  {theme}=  useTheme()
    let  themeColor =theme.colors.primary
    return (
        <>
            <ButtonGroup
                onPress={updateIndex}
                selectedIndex={index}
                selectedButtonStyle={{ backgroundColor: themeColor }}
                buttons={buttons}
                containerStyle={{ height: 40, borderRadius: 9 }}
            />
        </>
    )
}
export default OpcButtonGroup