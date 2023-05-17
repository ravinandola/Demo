import { Icon } from "@rneui/base";
import { useTheme} from "@rneui/themed";

const IconWrapper = ({ type, color, name, size,...props }) => {
    const {theme} = useTheme();
    return (
        <Icon type={type} name={name} size={size} color={color ? color : theme.colors.primary} {...props}></Icon>
    )
}
IconWrapper.defaultProps = {
    color: "",
    size: 16,
    type: "material-community"
}
export default IconWrapper