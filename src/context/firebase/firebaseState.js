import React, { useReducer } from 'react';

import firebase from '../../firebase/firebase';

import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

const FirebaseState = props => {

    // State initial
    const initialState = {
        menu: [] 
    }

    // useReducer 
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    return (
        <FirebaseContext.Provider
            value={{
                firebase
            }}
        >
            { props.children }
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;