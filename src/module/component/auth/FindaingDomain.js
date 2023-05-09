import { Button, Dialog } from "@rneui/base"

const FindaingDomain = ({ navigation }) => {
    const { visible: show, show: showModal, hide: hideModal, } = UseVisible();

    useEffect(() => {
        showModal();
    }, []);

    const haldeButton = () => {
        navigation.navigate('Domain');
        hideModal()
    }
    return (
        <>
            <Dialog
                isVisible={show}
                onBackdropPress={showModal}
                overlayStyle={{ backgroundColor: 'white', height: 'auto', borderRadius: 10 }}
            >
                fdaf
                <Button title="Ok"
                    buttonStyle={{
                        backgroundColor: 'green',
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 8,
                        marginBottom: 20
                    }}
                    onPress={() => haldeButton()} />
            </Dialog>
        </>
    )
}
export default FindaingDomain