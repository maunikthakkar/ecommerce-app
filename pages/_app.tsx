import { AppProps } from 'next/app';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from '@/components/core/Layout';
import  AppProviders  from '@/contexts/AppProviders';
import { User } from '@/types';
import '@/styles/global.css';
import '@/styles/nprogress.css';


interface MyAppProps extends AppProps {
  currentUser: User | null;
}

const MyApp = ({ Component, pageProps }: MyAppProps): JSX.Element => {
  return (
    <GoogleOAuthProvider clientId="688854018970-1gp8de2fubq6b32o1aj6k0olct6jld8m.apps.googleusercontent.com">
    <AppProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
