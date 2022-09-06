import logo from "../assets/potato.png"
import styles from "../styles/notfound.module.scss"

export default function NotFound() {
    return (
        <main className="container mx-auto h-screen">
            <div className="mx-auto text-center">
            <img src={logo} className={styles.logo} alt="logo" />
            <h2 className={styles.message}>404: There's nothing here</h2>
            </div>
        </main>
    );
}