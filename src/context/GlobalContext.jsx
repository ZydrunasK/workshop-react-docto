import { useEffect, useState } from "react";
import { createContext } from "react";


export const initialContext = {
    visibleState: false,
    changeState: () => {},
    didScroll: false,
};

export const GlobalContext = createContext(initialContext);


export function ContextWrapper (props) {
    
    const [visibleState, setVisibleState] = useState(initialContext.visibleState);
    const [didScroll, setDidScroll] = useState(initialContext.scroll);

    useEffect(() => {
        const handleScroll = () => {
            return window.scrollY > 72 ? setDidScroll(true) : setDidScroll(false); 
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    function changeState() {
        return setVisibleState(!visibleState)
    }



    const value = {
        visibleState,
        changeState,
        didScroll,
    }
    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}