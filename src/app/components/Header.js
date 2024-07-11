'use client';
import Image from "next/image";
import styles from './Header.module.css';
import Link from "next/link";

export default function Header() {
    return <header className={styles.header}>
        <Image className={styles.logo} src='/Logo.svg' alt="Logo" width={340} height={100} />
        <Image className={styles.n} src='/N.svg' alt="logo" width={100} height={100} priority={true} />
        <div className={styles.icons}>
            <div className={styles.icon_grow}><Link href='https://github.com/nicholasdejong' target="blank"><Image key='gh' src='/github.svg' className={styles.icon} alt="GitHub" width={60} height={60}/></Link></div>
            <div className={styles.icon_grow}><Link href='https://www.linkedin.com/in/nicholas-de-jong-966a41306/' target="blank"><Image key='in' src='/linkedin.svg' className={styles.icon} alt="LinkedIn" width={60} height={60} /></Link></div>
        </div>
    </header>
}