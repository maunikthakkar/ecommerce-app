import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from 'react';

import { Toast } from '@/components/ui';

interface ToastContextProps {
  isActive: boolean;
  type: string;
  message: string;
  setToast(type: string, message: string): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);
ToastContext.displayName = 'ToastContext';

export const ToastProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const initialState: ToastContextProps = {
    isActive: false,
    type: '',
    message: '',
    setToast: () => null,
    removeToast: () => null,
  };

  const [state, setState] = useState<ToastContextProps>(initialState);

  const removeToast = () => {
    setState((prevState) => ({ ...prevState, isActive: false }));
  };

  const setToast = (type: string, message: string) => {
    setState((prevState) => ({ ...prevState, message, type, isActive: true }));
  };
  
  useEffect(() => {
    if (state.isActive) {
      const timeoutId = setTimeout(() => {
        removeToast();
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.isActive]);

  return (
    <ToastContext.Provider value={{ ...state, setToast, removeToast }}>
      <Toast
        type={state.type}
        message={state.message}
        closeToast={removeToast}
        isActive={state.isActive}
      />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
