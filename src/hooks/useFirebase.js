import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from "../Firebase/firebase.initialize";

initialize();

const useFirebase = ()=>{

    const[user, setUser] = useState({});
    const[error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    //Google Sign In 
    const signInUsingGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    //observe user state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if (user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=>unsubscribed;
    },[])

    const signOutGoogle = ()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .catch((error)=>{

        })
        .finally(()=>setIsLoading(false));
    }

    return{
        user,
        error,isLoading,
        signInUsingGoogle,
        signOutGoogle,
        
    }


}

export default useFirebase;
