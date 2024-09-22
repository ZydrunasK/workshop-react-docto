import { useState } from "react";
import { createContext } from "react";


export const initialContext = {
    visibleState: false,
    changeState: () => {},

};

export const GlobalContext = createContext(initialContext);


export function ContextWrapper (props) {
    
    const [visibleState, setVisibleState] = useState(initialContext.visibleState)

    function changeState() {
        return setVisibleState(!visibleState)
    }



    const value = {
        visibleState,
        changeState,
    }
    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}