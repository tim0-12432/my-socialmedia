
import SocialCard from "./SocialCard";
import styles from "./Social.module.scss";
import { profiles } from "./../../resources/profiles-json";

function Social() {
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
        <div className={ styles.container }>
            { socialList }
        </div>
    );
}

export default Social;