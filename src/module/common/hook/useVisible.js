import { useState } from 'react';

function UseVisible(initValue) {
    const [visible, setVisible] = useState(!!initValue);
    const [content, setContent] = useState();

    const toggle = () => {
        setVisible(!visible);
    };

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return {
        visible,
        show,
        hide,
        toggle,
        setVisible,
        content,
        setContent
    };
}

export { UseVisible };
