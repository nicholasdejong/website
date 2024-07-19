import styles from './page.module.css';
import Header from "@/app/components/Header";
import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";

export default function Home() {
  return <div className={styles.page}>
    {/* <Header /> */}
    <article className={styles.article}>
      <div className={styles.text}>
        placeholder text for photo
      </div>
      <div className={styles.buttons}>
        <div className={styles.button_container}>
          <Button href='/work'>My Work</Button>
          <Button href='/about'>About Me</Button>
          <Button href='/contact'>Contact</Button>
        </div>
      </div>
    </article>
    {/* <Footer /> */}
  </div>
}