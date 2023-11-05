"use client";
import { createContext, useContext, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

type DataType = {

};

interface ContextProps {

}

const GlobalContext = createContext<ContextProps>({

});

export function GlobalContextProvider ({ children }: PropsWithChildren) {


    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                <GlobalContext.Provider value={{  }}>
                    {children}
                </GlobalContext.Provider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
