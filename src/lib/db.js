"use server";
import { initializeApp } from 'firebase/app';
import { collection, getFirestore, getDocs, getCount, query, orderBy, limit, startAfter, endBefore } from 'firebase/firestore/lite';
import 'dotenv/config';

const firebaseConfig = JSON.parse(process.env.FIREBASECONFIG);

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const projects = collection(db, 'projects');

export async function getLatestProjects(offset, count) {
    let data = [];
    let lastVisible;
    let projectCount = (await getCount(projects)).data();
    if (offset > projectCount.count) return [];
    if (offset > 0) {
        let _q = query(projects, orderBy("created", "desc"), limit(offset));
        let _snapshot = await getDocs(_q);
        lastVisible = _snapshot.docs[offset - 1];
    }
    let q = query(projects, orderBy("created", "desc"), limit(count || 1), offset > 0 ? startAfter(lastVisible) : endBefore(null));
    let snapshot = await getDocs(q);
    snapshot.forEach(project => {
        data.push(project.data());
    });
    return data;
}