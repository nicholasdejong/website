import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from './layout.module.css';

export default function RootLayout({ children }) {
    return <body className={styles.body}>
        <Header />
        {children}
        <Footer />
    </body>
}