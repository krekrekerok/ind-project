import { Grid, Stack } from '@chakra-ui/layout';
import { collection, getDocs, doc, onSnapshot } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from '../../Firebase'
import UniCard from './Card';
import InfoCard from './InfoCard';


const Ucatalog = () => {
    const [uniPreview, setUniPreview] = useState([])

    useEffect(
        () => 
          onSnapshot(collection(db, "universities"), (snapshot) => 
          setUniPreview(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
          ),
        []
    )
    console.log("catalog",uniPreview);

    return (
        <Stack justifyContent = "space-around" flexDirection = {'row'} flexWrap = {"wrap"} >
            {
                uniPreview ? 
                      (uniPreview.map(item => (
                            <Stack >
                                <InfoCard item = {item} key = {item.id}/>
                            </Stack>
                        ))
                    )
                :(
                    <h2>Loading...</h2>
                )
            }
        </Stack >
    );
};

export default Ucatalog;