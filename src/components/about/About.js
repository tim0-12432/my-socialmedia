import React from "react";

import useOnScreen from "./../../hooks/useOnScreen";
import styles from "./About.module.scss";
import RepoElement from "./RepoElement";
import FAQElement from "./FAQElement";

import { faqs } from "./../../resources/faq-json";
import { languageStrings as strings } from "../../resources/languages/languageStrings";

function About({ data }) {
    const rRef = React.useRef();
    const onScreen = useOnScreen(rRef, "0px");

    const repoElements = [];
    for (let index = 0; index < 6; index++) {
        if (data[index]) {
            repoElements.push(<RepoElement data={ data[index] } />);
        }
    }

    return (
        <div className={ styles.container } style={{ opacity: onScreen ? 1 : 0 }} ref={ rRef }>
            <div className={ styles.faq_container }>
                <h2>{ strings.faq }</h2>
                {
                    faqs[strings.getLanguage()].map((item) => {
                        return (
                            <FAQElement data={ item } />
                        );
                    })
                }
            </div>
            <div className={ styles.repos_container }>
                { repoElements }
            </div>
        </div>
    );
}

export default About;