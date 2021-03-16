import React from "react";
import styles from "./Decoration.module.scss";

function DecorationBubble({ hw, mL }) {
    return (
        <div className={ styles.bubble } style={{ height: hw, width: hw, marginLeft: mL }} />
    )
}

export default DecorationBubble
