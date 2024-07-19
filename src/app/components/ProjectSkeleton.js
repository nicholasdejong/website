// Fallback component for `ProjectCard`.
import styles from './ProjectSkeleton.module.css';

export default function ProjectSkeleton() {
    return <div className={styles.card}>
        <div className={styles.img}></div>
        <div className={styles.cover}>
            <div className={styles.title}></div>
            <div className={styles.description}></div>
            {/* <div className={styles.description}></div>
            <div className={styles.description}></div> */}
        </div>
        <div className={styles.shimmer}></div>
    </div>
}