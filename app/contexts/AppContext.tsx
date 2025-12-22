"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
    rememberCurrentSession: boolean;
    setRememberCurrentSession: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [rememberCurrentSession, setRememberCurrentSession] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ rememberCurrentSession, setRememberCurrentSession }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
