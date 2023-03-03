import { async } from '@firebase/util';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    where,
    writeBatch,
} from 'firebase/firestore';
import db from './firebase';

export const handleNew = async () => {
    const name = prompt('enter color name');
    const value = prompt('enter color value');

    const collectionRef = collection(db, 'colors');
    const payload = { name, value, timestamp: serverTimestamp() };
    const docRef = await addDoc(collectionRef, payload);
    console.log('the new ID is ', docRef.id);
};

export const handleEdit = async (id) => {
    const name = prompt('enter color name');
    const value = prompt('enter color value');

    const docRef = doc(db, 'colors', id);
    const payload = { name, value };
    setDoc(docRef, payload);
    console.log(id);
};

export const handleDelete = async (id) => {
    const docRef = doc(db, 'colors', id);
    await deleteDoc(docRef);
};

export const handleQueryDelete = async () => {
    const inputColor = prompt('Enter color name');
    const collectionRef = collection(db, 'colors');

    const q = query(collectionRef, where('name', '==', inputColor));

    const snapshot = await getDocs(q);
    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    results.forEach(async (result) => {
        const docRef = doc(db, 'colors', result.id);
        await deleteDoc(docRef);
    });
};
