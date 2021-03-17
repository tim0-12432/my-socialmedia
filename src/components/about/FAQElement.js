import React, { useState } from "react";

import styles from "./About.module.scss";

export default function FAQElement({ data }) {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => setOpen(!open)}>
            <h3>{ data.question }</h3>
            {   
                open ?
                data.answers.map((item) => {
                    return (
                        <p key={ item + data.answers.indexOf(item) }>{ item }</p>
                    );
                })
                : null
            }
        </div>
    )
}
