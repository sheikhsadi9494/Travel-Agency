import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/Firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const provider = new GoogleAuthProvider();

  const register = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        navigate('/');

      })
      .catch((error) => {
        setAuthError(error.message)
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const login = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      navigate(destination);
      setAuthError('')
    })
    .catch((error) => {
      setAuthError(error.message)
    })
    .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, navigate) => {
   signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    const destination = location?.state?.from || '/home';
    navigate(destination);
    setAuthError('');
  }).catch((error) => {
    // Handle Errors here.
    setAuthError(error.message)
  });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
  }, [])

  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    register,
    login,
    logOut, 
    isLoading, 
    authError, 
    signInWithGoogle,
  };
};

export default useFirebase;
