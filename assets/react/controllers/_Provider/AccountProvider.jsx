import React from "react";
import { createContext, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {

    const [lastUsername, setLastUsername] = useState(null);
    const [error, setError] = useState(null);

    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    const accountContextValue = {
        lastUsername, error, csrfToken,
    };

    return (
        <AccountContext.Provider value={accountContextValue} >
            {children}
        </AccountContext.Provider>
    );
}