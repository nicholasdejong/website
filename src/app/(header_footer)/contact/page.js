import styles from './page.module.css';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Contact() {
    return <div className={styles.page}>
        <article className={styles.article}>
            <h1 className={`${styles.heading} ${jetbrains.className}`}>Contact</h1>
            <form className={styles.form} action={'/api/submit'} method='post'>
                <div className={styles.textWrapper}>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} name='name' placeholder='Name' required />
                        <input className={styles.input} name='email' placeholder='Email' type='email' required />
                        <input className={styles.input} name='subject' placeholder='Subject' required />
                    </div>
                    <textarea className={styles.message} name='message' placeholder='Message' required />
                </div>
                <input className={`${styles.submit} ${jetbrains.className}`} type='submit' formMethod='POST' value='Submit' />
            </form>
        </article>
    </div>
}