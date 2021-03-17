import React from "react";

import useOnScreen from "./../../hooks/useOnScreen";
import styles from "./Decoration.module.scss";

function DecorationBubble({ hw, mL, setOnStartPage }) {
    const rRef = React.useRef();
    const onScreen = useOnScreen(rRef, "0px");

    React.useEffect(() => {
        setOnStartPage(!onScreen);
    }, [onScreen]);

    return (
        <div className={ styles.bubble } style={{ height: hw, width: hw, marginLeft: mL }} ref={ rRef } />
    )
}

export default DecorationBubble
