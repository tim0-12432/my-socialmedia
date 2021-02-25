import { Component } from "react";
import { Parallax } from "react-parallax";
import { animateScroll as scroll } from "react-scroll";
import SocialCard from "./SocialCard";
import "./Social.scss";
import { profiles } from "./../../resources/profiles-json";

export default class Social extends Component {
    render() {
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
            <section id="social">
                <Parallax renderLayer={ percentage => (
                    <div className="social__layer">
                        <h2 style={{ opacity: `${percentage * 1}` }}>Socialmedia</h2>
                        <div className="social__layer__wrapper" style={{ opacity: `${percentage * 1}` }}>
                            { socialList }
                        </div>
                        <footer>
                            <div className="copyright">
                                <h3>Copyright &copy; by Tim0_12432 2021</h3>
                            </div>
                            <div className="to-top" onClick={ scroll.scrollToTop }>
                                <div><i className="fa fa-angle-double-up" aria-hidden="true" />Top</div>
                            </div>
                        </footer>
                    </div>
                ) }>
                    <div className="social__container" />
                </Parallax>
            </section>
        );
    }
}