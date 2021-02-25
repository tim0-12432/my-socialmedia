import { Component } from "react";
import { Parallax } from "react-parallax";
import './About.scss';

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <Parallax renderLayer={ percentage => (
                    <div className="about__layer">
                        <h2 style={{ opacity: `${percentage * 1}` }}>About Me</h2>
                    </div>
                ) }>
                    <div className="about__container" />
                </Parallax>
            </section>
        );
    }
}