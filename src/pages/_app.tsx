import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/style.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MapsContextProvider } from '@/context/googleMapsContext';
import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '../Firebase/firebase.config';
import { FilterProvider } from '@/context/filterContext';
import type { AppProps } from 'next/app';

interface AuthContextType {
  user: User | null;
  signedIn: boolean;
  loading: boolean;
  setSignedIn: (signedIn: boolean) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

const Auth = createContext<AuthContextType | undefined>(undefined);

export default function App({ Component, pageProps }: AppProps) {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [appointmentHistory, setAppointmentHistory] = useState<any[]>([]); // Update this type if you know the structure of appointmentHistory

  useEffect(() => {
    setLoading(true);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
      setSignedIn(!!user);
    });
  }, []);

  return (
    <Auth.Provider value={{ user, signedIn, loading, setSignedIn, setUser, setLoading }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FilterProvider>
          <MapsContextProvider>
            <Layout>
              <Component
                {...pageProps}
                setAppointment={setAppointmentHistory}
                appointmentHistory={appointmentHistory}
              />
            </Layout>
          </MapsContextProvider>
        </FilterProvider>
      </LocalizationProvider>
    </Auth.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(Auth);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
