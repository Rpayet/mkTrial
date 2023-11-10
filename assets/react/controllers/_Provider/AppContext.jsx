import React, { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const appContextValue = {
    };

    return (
        <AppContext.Provider value={appContextValue} >
            {children}
        </AppContext.Provider>
    );
}
