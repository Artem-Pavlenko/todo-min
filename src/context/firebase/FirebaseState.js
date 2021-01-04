import React, {useReducer} from "react"
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";

export const FirebaseState = ({children}) => {

    const [state, dispatch] = useReducer(firebaseReducer, {
        notes: [],
        loading: false
    })

    return (
        <FirebaseContext.Provider value={{

        }}>
            {children}
        </FirebaseContext.Provider>
    )
}