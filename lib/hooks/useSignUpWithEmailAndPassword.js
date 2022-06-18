import { createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback } from "react";
import { useAuth } from "reactfire";
import { useRequestState } from "./useRequestState";

export function useSignUpWithEmailAndPassword() {
  const auth = useAuth();

  const { state, setLoading, setData, setError } = useRequestState();

  const signUp = useCallback(
    async (email, password) => {
      setLoading(true);

      try {
        const credential = await createUserWithEmailAndPassword(
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

  return [signUp, state];
}
