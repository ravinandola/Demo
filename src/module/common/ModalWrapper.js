import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const ModalWrapper = (props) => {
    return (
        <>
            <Provider>
                <Portal>
                </Portal>
                <Modal {...props}>
                    {props.childarn}
                </Modal>
            </Provider>
        </>
    )
}
export default ModalWrapper