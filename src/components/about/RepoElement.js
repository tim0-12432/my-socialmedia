import styles from "./About.module.scss";

export default function RepoElement({ data }) {
    console.log(data);

    return (
        <div key={ data.id }>
            <h3>{ data.name }</h3>
            <p>{ data.description }</p>
            <div className={ styles.information }>
                <p className={ styles.lang }>{ data.language  }<i className={ `fa fa-${ data.language?.toLowerCase() }` } aria-hidden="true" /></p>
                <p className={ styles.links }>{ data.homepage ? <a href={ data.homepage } target="_blank"><i className="fa fa-desktop" aria-hidden="true"/></a> : "" }<a href={ data.html_url } target="_blank"><i className="fa fa-code" aria-hidden="true" /></a></p>
            </div>
        </div>
    )
}
