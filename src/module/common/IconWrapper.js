import { Icon } from "@rneui/base";
import { useTheme} from "@rneui/themed";

const IconWrapper = ({ type, color, name, size,...props }) => {
    const {theme} = useTheme();
    return (
        <Icon type={type} name={name} size={size? size :16} color={color ? color : theme.colors.primary} {...props}></Icon>
    )
}
IconWrapper.defaultProps = {
    color: "",
    size: '',
    type: "material-community"
}
export default IconWrapper