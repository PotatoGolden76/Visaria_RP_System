import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.scss"

export default function Header() {
    const tailwindHeader = [
        "flex",
        "p-3",
        "justify-start",
        "items-center",
        "w-full",
        "text-center"
    ]

    return (
        <div className={classNames(tailwindHeader, styles.header)}>
            <Link className={styles.anchor} to="/" >Visaria Wiki</Link>
        </div>
    );
}

