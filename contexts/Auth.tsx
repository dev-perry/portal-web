import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { User } from '@supabase/gotrue-js';
import { supabase } from '../utils/supabaseClient';

type AuthContext = {
  user: User;
  signup: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContext);

function Auth({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({} as User);
  const router = useRouter();

  useEffect(() => {
    setUser(supabase.auth.user() as User);
    if(!user && !router.asPath.includes('/submit')){
      router.replace('/auth')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const signup = async (email: string, password: string) => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      setUser(user as User);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      setUser(user as User);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser({} as User);
      console.log("Log out triggered")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
