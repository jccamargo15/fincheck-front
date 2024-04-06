import { createContext, useCallback, useState } from "react";

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem('fincheck:accessToken', accessToken);

    setSignedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
