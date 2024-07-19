import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from './page.module.css';
import ProjectList from "../components/ProjectList";

// How many projects are fetched after each load
const PERPAGE = 3;

export default function Page() {
    return <body className={styles.body}>
        <Header />
        <div className={styles.page}>
            <ProjectList perPage={PERPAGE} />
        </div>
        <Footer />
    </body>
}