'use client';
import { JetBrains_Mono } from 'next/font/google';
import styles from './Button.module.css';
import Link from 'next/link';

const jetbrains = JetBrains_Mono({subsets: ['latin']});

export default function Button(props) {
    return <div className={styles.grow}><Link href={props.href}><button className={`${styles.button} ${jetbrains.className}`}>{props.children}</button></Link></div>
}