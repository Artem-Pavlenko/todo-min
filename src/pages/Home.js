import React, {useContext, useEffect} from "react";
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Preloader} from "../components/Preloader";

export const Home = () => {

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Form/>
            {loading
                ? <Preloader/>
                : <Notes notes={notes} onRemove={removeNote}/>
            }
        </>
    )
}