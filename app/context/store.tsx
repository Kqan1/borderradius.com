"use client";
import { createContext, useContext, PropsWithChildren, useState, Dispatch, SetStateAction } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";


type DataType = {
    headerDropdownOpen: boolean
    setHeaderDropdownOpen: Dispatch<SetStateAction<boolean>>
};


interface ContextProps {
    headerDropdownOpen: boolean
    setHeaderDropdownOpen: Dispatch<SetStateAction<boolean>>
};


const GlobalContext = createContext<ContextProps>({
    headerDropdownOpen: false,
    setHeaderDropdownOpen: ()=>{}
});


export function GlobalContextProvider ({ children }: PropsWithChildren) {

    //! Header Open State
    const [headerDropdownOpen, setHeaderDropdownOpen] = useState(false);

    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                <GlobalContext.Provider value={{ headerDropdownOpen, setHeaderDropdownOpen }}>
                    {children}
                </GlobalContext.Provider>
            </ThemeProvider>
        </SessionProvider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);