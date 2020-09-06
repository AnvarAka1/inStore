import React from 'react';
import {useModal} from "../../hooks";
import Context from './context'

function AuthModal ({ children }) {

    const authModal = useModal(false);

    const value = {
        ...authModal
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default AuthModal