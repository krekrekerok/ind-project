import axios from 'axios';
import React, {useEffect,useReducer, useState } from 'react';
import { collection, doc, onSnapshot, setDoc, addDoc } from '@firebase/firestore';
import db from '../Firebase';
import { API } from '../helpers/const';

export const adminContext = React.createContext()


const INIT_STATE = {
    universities: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_UNIVERSITIES":
            return {...state, universities: action.payload}
    
        default:
            return {...state}
    }
}


const AdminContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    // const [data, setData] = useState([])
    // useEffect(
    //     () => 
    //         onSnapshot(collection(db, "universities"), (snapshot) => 
    //         setData(snapshot.docs.map((doc) => (doc.data())))
    //         ),
    //         []
    // )

    const getUniversities = async() => {
        const { data } = await axios(API)
        dispatch({
            type: "GET_UNIVERSITIES",
            payload: data
        })
    }

    const createUniversity = async(newUniversity) => {
        axios.post(API, {...newUniversity})
        console.log("created");
        console.log("uniAdmin" , state.universities);
        getUniversities()
    }

    const deleteUniversity = async(id) => {
        await axios.delete(`${API}/${id}`)
        console.log("deleted");
        getUniversities()
    }




    

    return (
        <adminContext.Provider value={{
            universities: state.universities,
            getUniversities,
            createUniversity,
            deleteUniversity
        }}>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;