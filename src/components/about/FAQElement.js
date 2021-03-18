import React from "react";

import styles from "./About.module.scss";

export default function FAQElement({ data }) {

    return (
        <details>
            <summary>{ data.question }</summary>
            {
                data.answers.map((item) => {
                    return (
                        <p key={ item + data.answers.indexOf(item) }>{ item }</p>
                    );
                })
            }
        </details>
    )
}
