import classNames from "classnames";
import Header from "../components/header";

import styles from "../styles/wiki.module.scss"

interface ArchetypeFeature {
    name: string;
    level: string;
    description: string;
    extras: string[];
}

interface Archetype {
    name: string;
    description: string;
    stats: string[];
    weapons: string[];
    features: ArchetypeFeature[];
}

interface ClassFeature {
    level: number;
    talent: string[];
    feature: string;
}

interface ClassObject {
    name: string;
    description: string;
    stats: string[];
    weapons: string[];
    archetypes: Archetype[];
    features: ClassFeature[];
}


export default function Class(props: any) {
    let data: ClassObject = props.data
    
    console.log(data)

    const tailwindContainer = [
        "container",
        "m-auto",
        "p-5"
    ]

    return (
        <>
            <Header />
            <div className={classNames(tailwindContainer, styles.container)}>
                <h1 className={styles.title}>{data.name}</h1>
            </div>
        </>
    );
}

