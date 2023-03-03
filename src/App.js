import {
    handleNew,
    handleEdit,
    handleDelete,
    handleQueryDelete,
} from './util.js';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import db from './firebase';
import { useState, useEffect } from 'react';
import Dot from './Dot.js';
function App() {
    const [colors, setColors] = useState([
        { name: 'loading...', id: 'initial' },
    ]);
    console.log(colors);
    useEffect(() => {
        const collectionRef = collection(db, 'colors');
        const q = query(collectionRef, orderBy('timestamp', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            setColors(
                snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        });

        return unsub;
    }, []);

    return (
        <div className='App'>
            <button onClick={handleNew}>New</button>
            <button onClick={handleQueryDelete}>Query delete</button>
            <ul>
                {colors.map((color) => (
                    <li key={color.id}>
                        <a onClick={() => handleEdit(color.id)} href='#'>
                            Edit{' '}
                        </a>
                        <button onClick={() => handleDelete(color.id)}>
                            delete
                        </button>
                        <Dot color={color.value} /> {color.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
