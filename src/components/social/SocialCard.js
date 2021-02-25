import { Component } from "react";
import "./SocialCard.scss";
import tellonymLogo from "./../../resources/images/tellonym.png";

import discordPb  from "./../../resources/images/profiles/discord.jpeg";
import snapchatPb  from "./../../resources/images/profiles/snapchat.png";

export default class Social extends Component {
    render() {
        const socialMediaIcons = {
            insta: "fa-instagram",
            snap: "fa-snapchat-ghost",
            github: "fa-github",
            discord: "fa-discord-alt"
        }

        const social = this.props.profile.social;
        const picture = this.props.profile.pic;

        function getPath(url) {
            switch (social) {
                case "discord":
                    return discordPb;
                case "snap":
                    return snapchatPb;
                default:
                    return url;
            }
        }

        return (
            <div className="social__card">
                <div className="social__card__front">
                    { social === "tellonym" ? <img src={ tellonymLogo } />
                    : <i className={ `fa ${socialMediaIcons[social]}` } aria-hidden="true" /> }
                </div>
                <div className="social__card__back">
                    <a href={ this.props.profile.url } target="_blank">
                        <img src={ getPath(picture) } />
                        <h3>@{ this.props.profile.name }</h3>
                    </a>
                </div>
            </div>
        );
    }
}