import styles from "./About.module.scss";
import RepoElement from "./RepoElement";
import FAQElement from "./FAQElement";

function About({ data }) {

    const repoElements = [];
    for (let index = 0; index < 6; index++) {
        if (data[index]) {
            repoElements.push(<RepoElement data={ data[index] } />);
        }
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.faq_container }>
                <FAQElement />
            </div>
            <div className={ styles.repos_container }>
                { repoElements }
            </div>
        </div>
    );
}

export default About;