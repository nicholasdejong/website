'use client';
import { JetBrains_Mono } from 'next/font/google';
import styles from './Button.module.css';

const jetbrains = JetBrains_Mono({subsets: ['latin']});

export default function Button(props) {
    return <button className={`${styles.button} ${jetbrains.className}`}>{props.children}</button>
}