const { auth, db } = import('../config/firebase/firebase')
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';
import { setUser } from '../config/async_storage';

export const signupUser = async (username, email, password,) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email,
            username,
            createdAt: Date.now()
        })

        setUser(user.uid)
        return user;
    } catch (error) {
        console.log(error?.message)
    }

}
export const loginUser = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredentials.user.uid)
        return userCredentials.user;
    } catch (error) {
        console.log(error?.message)
    }
}