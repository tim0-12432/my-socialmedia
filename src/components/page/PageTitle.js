import styles from "./Page.module.scss";

function PageTitle({ title }) {
    return (
        <div className={ styles.title }>
            <h1>{ title }</h1>
        </div>
    );
}

export default PageTitle;