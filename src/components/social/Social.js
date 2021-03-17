import React from "react";

import useOnScreen from "./../../hooks/useOnScreen";
import SocialCard from "./SocialCard";
import styles from "./Social.module.scss";
import { profiles } from "./../../resources/profiles-json";

function Social() {
    const rRef = React.useRef();
    const onScreen = useOnScreen(rRef, "0px");

    let socialList = [];
    for (const profile in profiles) {
        if (Object.hasOwnProperty.call(profiles, profile)) {
            const element = profiles[profile];
            socialList.push(
                <SocialCard profile={ element } key={ profile } />
            );
        }
    }

    return (
        <div className={ styles.container } style={{ opacity: onScreen ? 1 : 0 }} ref={ rRef }>
            { socialList }
        </div>
    );
}

export default Social;