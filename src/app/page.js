import styles from "./page.module.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Markdown from "react-markdown";
import md from './markdown/index.md';

export default function Home() {
  return <>
    <Header />
    <article className={styles.article}>
      <div className={styles.text}>
        <Markdown>{md}</Markdown>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button_container}>
          <Button key='work'>My Work</Button>
          <Button key='about'>About Me</Button>
          <Button key='contact'>Contact</Button>
        </div>
      </div>
    </article>
    <footer></footer>
  </>
}