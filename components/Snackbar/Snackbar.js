import React, {useContext, useEffect, useState} from 'react';
import classes from './Snackbar.module.scss'
import Context from './context'

export const constants = {
    DANGER: 'red',
    SUCCESS: 'green'
}
export const useSnackbar = () => {
    const { openHandler } = useContext(Context)
    return openHandler
}
function Snackbar({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    useEffect(() => {
        let timeout = null
        if(isOpen){
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                setIsOpen(false)
            }, 2000)
        }
        return () => clearTimeout(timeout)
    }, [isOpen])

    const openHandler = (message) => {
        setIsOpen(true)
        setMessage(message)
    }
    const closeHandler = () => {
        setIsOpen(false)
    }
    const value = {
        openHandler,
        closeHandler
    }
    return <Context.Provider value={value}>
        { children }
        {isOpen && <p className={`${classes.Snackbar} ${isOpen && classes.Open}`}>
            {message}
        </p>}
    </Context.Provider>
}

export default Snackbar