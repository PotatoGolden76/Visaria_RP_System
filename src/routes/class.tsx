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
        "p-5",
        "px-10"
    ]

    return (
        <>
            <Header />
            <div className={classNames(tailwindContainer, styles.container)}>
                <h1 className={styles.title}>{data.name}</h1>
                <h3 className={styles.description}>{data.description}</h3>

                <h3 className={styles.description}><b>Stats: </b>{data.stats.map((e, i) => { return i == data.stats.length - 1 ? e : e + ", " })}</h3>
                <h3 className={styles.description}><b>Weapons: </b>{data.weapons.map((e, i) => { return i == data.weapons.length - 1 ? e : e + ", " })}</h3>
                {
                    data.archetypes.map((archetype) => {
                        return <div className={styles.section}>
                            <h1 className={styles.title}>{archetype.name}</h1>
                            <h3 className={styles.description}>{archetype.description}</h3>

                            <h3 className={styles.description}><b>Stats: </b>{archetype.stats.map((e, i) => { return i == archetype.stats.length - 1 ? e : e + ", " })}</h3>
                            <h3 className={styles.description}><b>Weapons: </b>{archetype.weapons.map((e, i) => { return i == archetype.weapons.length - 1 ? e : e + ", " })}</h3>

                        </div>;
                    })
                }
            </div>
        </>
    );
}

