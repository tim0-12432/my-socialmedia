import styles from "./Social.module.scss";
// leaking logos/icons
import tellonymLogo from "./../../resources/images/tellonym.png";
// leaking online reachable profilepics
import discordPb  from "./../../resources/images/profiles/discord.jpeg";
import snapchatPb  from "./../../resources/images/profiles/snapchat.png";

function SocialCard({ profile }) {
    const socialMediaIcons = {
        insta: "fa-instagram",
        snap: "fa-snapchat-ghost",
        github: "fa-github",
        discord: "fa-discord-alt"
    }

    const social = profile.social;
    const picture = profile.pic;

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
        <div className={ styles.card }>
            <div className={ styles.front }>
                    { social === "tellonym" ? <img src={ tellonymLogo } />
                    : <i className={ `fa ${socialMediaIcons[social]}` } aria-hidden="true" /> }
                </div>
                <div className={ styles.back }>
                    <a href={ profile.url } target="_blank">
                        <img src={ getPath(picture) } />
                        <h3>@{ profile.name }</h3>
                    </a>
                </div>
        </div>
    );
}

export default SocialCard;