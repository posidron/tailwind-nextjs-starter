import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback } from "react";
import { useAuth } from "reactfire";

import { useRequestState } from "./useRequestState";

export function useSignInWithEmailAndPassword() {
  const auth = useAuth();

  const { state, setLoading, setData, setError } = useRequestState();

  const signIn = useCallback(
    async (email, password) => {
      setLoading(true);

      try {
        const credential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setData(credential);
      } catch (error) {
        setError(error);
      }
    },
    [auth, setData, setError, setLoading]
  );

  return [signIn, state];
}
