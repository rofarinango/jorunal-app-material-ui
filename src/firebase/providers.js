import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
        
        
    } catch(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);
        // TODO: actualizar el displayName en Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid: photoURL, email, displayName
        }
        
    } catch (error) {
        // console.log(error);
        
        return { ok: false, errorMessage: error.message}
    }
}