import { ThemeProvider } from 'next-themes';
import { SWRConfig } from 'swr';
import React, { ReactNode } from 'react';
import { ToastProvider } from './toast';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        dedupingInterval: 0,
      }}
    >
      <ThemeProvider attribute="class">
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default AppProviders;
