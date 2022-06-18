import { FirebaseError } from "firebase/app";
import { useAuth } from "reactfire";

import { browserPopupRedirectResolver, signInWithPopup } from "firebase/auth";

import { useCallback } from "react";
import { useRequestState } from "./useRequestState";

export function useSignInWithProvider() {
  const auth = useAuth();

  const { state, setLoading, setData, setError } = useRequestState();

  const signInWithProvider = useCallback(
    async (provider) => {
      setLoading(true);

      try {
        const credential = await signInWithPopup(
          auth,
          provider,
          browserPopupRedirectResolver
        );

        setData(credential);
      } catch (error) {
        setError(error);
      }
    },
    [auth, setData, setError, setLoading]
  );

  return [signInWithProvider, state];
}
