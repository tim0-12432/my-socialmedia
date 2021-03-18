import Typewriter from "typewriter-effect";
import React from "react";

import useOnScreen from "./../../hooks/useOnScreen";
import styles from "./Header.module.scss";

function Header({ setStartReady, setHeaderVisible }) {
    const rRef = React.useRef();
    const onScreen = useOnScreen(rRef, "0px");

    React.useEffect(() => {
        setHeaderVisible(onScreen);
    }, [onScreen]);

    return (
        <header className={ styles.header } ref={ rRef }>
            <h1><Typewriter onInit={(typewriter) => {
                typewriter.typeString("Hi!").pauseFor(2000).deleteAll()
                        .typeString("My name is Timo!").pauseFor(1500).deleteAll()
                        .typeString("Have a look at the pages down below!")
                        .callFunction(() => setStartReady())
                        .start();
            }} /></h1>
        </header>
    );
}

export default Header;