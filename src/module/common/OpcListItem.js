import { ListItem, useTheme } from "@rneui/themed";

function OpcListItemTitle({ children, color, fontSize, ...props }) {
    let _size = fontSize ? fontSize : 15;
    let _color = color ? color : 'gray'
    return (
        <>
            <ListItem.Title {...props} style={{ fontSize: _size, color: _color }}>
                {children}
            </ListItem.Title>
        </>
    )
};
OpcListItemTitle.defaultProps = {
    fontSize: '',
    color: ''
}

function OpcListItemContent({ children, props }) {
    return (
        <>
            <ListItem.Content {...props}>
                {children}
            </ListItem.Content>
        </>
    )

};

function OpcListItem({ children, backgoudColor, ...props }) {
    return (
        <>
            <ListItem {...props} containerStyle={{
                backgroundColor: backgoudColor ? backgoudColor : 'traspernt'
            }}>
                {children}
            </ListItem>
        </>
    )
};
OpcListItem.defaultProps = {
    backgoudColor: ""
}
function OpcListItemChevron({ style, fontSize, color, ...props }) {
    let _size = fontSize ? fontSize : 15;
    let _color = color ? color : 'gray'
    return (
        <ListItem.Chevron {...props} style={{ fontSize: _size, color: _color }} />
    )
};
OpcListItemChevron.defaultProps = {
    fontSize: "",
    color: ""
}
function OpcListItemSubtitle({ children, color, style, fontSize, ...props }) {
    let _size = fontSize ? fontSize : 11;
    let _color = color ? color : 'gray'
    return (
        <>
            <ListItem.Subtitle  {...props} style={{ ...style, fontSize: _size, color: _color }}>
                {children}
            </ListItem.Subtitle>
        </>
    )

}
OpcListItemSubtitle.defaultProps = {
    fontSize: "",
    color: "",
    style: ""
}
export default Object.assign(OpcListItem, {
    Chevron: OpcListItemChevron,
    Content: OpcListItemContent,
    Title: OpcListItemTitle,
    Subtitle: OpcListItemSubtitle
});