import Image from 'next/image';
import styles from './ProjectCard.module.css';
import ProjectSkeleton from './ProjectSkeleton';
import { Suspense, forwardRef } from 'react';

// function fetchData() {
//     return new Promise(res => setTimeout(() => res({ title: 'Custom Keyboard!', description: 'This is a description.' }), 5000));
// }

export const ProjectCard = forwardRef(function ProjectCard({ title, description }, ref) {

    return <div ref={ref} className={styles.card}>
        <div className={styles.img}><Image src={'/example.jpg'} alt='Project Image' width={0} height={0} sizes='100vw' style={{ width: '100%', height: '300px', objectFit: 'cover' }} /></div>
        <div className={styles.cover}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
});

// function Card() {
//     return new Promise(async res => {
//         let { title, description } = await fetchData(); // Fake a long request
//         res(<Data title={title} description={description} />);
//     })
// }

// export default function ProjectCard() {
//     return <Suspense fallback={<ProjectSkeleton />}>
//         <Card />
//     </Suspense>
// }