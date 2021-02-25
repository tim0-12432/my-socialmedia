import { Component } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import './Header.scss';
import wallpaper from './../../resources/images/wallpaper.jpeg';

export default class Header extends Component {
    handleThemeButtonClick() {
        const currentClasses = document.body.classList.value;
        if (currentClasses === "dark-theme") {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        } else if (currentClasses === "light-theme") {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("dark-theme");
        }
    }

    render() {
        return (
            <section id="header">
                <Parallax bgImage={ wallpaper } blur={{ min: -10, max: 10 }} strength={ 300 }>
                    <div className="header__container">
                        <ul className="linklist">
                            <li><Link
                                to="about"
                                activeClass="active"
                                spy={ true }
                                smooth={ true }
                                offset={ 0 }
                                duration={ 500 }
                            >About me</Link></li>
                            <li><Link
                                to="social"
                                activeClass="active"
                                spy={ true }
                                smooth={ true }
                                offset={ 0 }
                                duration={ 700 }
                            >Socialmedia</Link></li>
                        </ul>
                        <h1>Tim0_12432</h1>
                        <div className="theme__btn" onClick={ this.handleThemeButtonClick }>
                            <i className="fa fa-moon" aria-hidden="true"></i>
                            <i className="fa fa-toggle-on" aria-hidden="true"></i>
                            <i className="fa fa-toggle-off" aria-hidden="true"></i>
                        </div>
                    </div>
                </Parallax>
            </section>
        );
    }
}
