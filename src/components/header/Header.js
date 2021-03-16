import Typewriter from "typewriter-effect";

import styles from "./Header.module.scss";

function Header({ setStartReady }) {
    return (
        <header className={ styles.header }>
            <h1><Typewriter onInit={(typewriter) => {
                typewriter.typeString("Hi!").pauseFor(200).deleteAll()
                        .typeString("My name is Timo!").pauseFor(1500).deleteAll()
                        .typeString("Have a look at the pages down below!")
                        .callFunction(() => setStartReady())
                        .start();
            }} /></h1>
        </header>
    );
}

export default Header;