import React, { useContext, useEffect } from 'react';
import { VStack,Box, Text, Grid, Button, useColorMode, useColorModeValue, AspectRatio, Image} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { adminContext } from '../context/AdminContext';
import Welcome from '../components/mainContent/Welcome';
import Intro from '../components/mainContent/Intro';

const MainPage = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("gray.500", "gray.200")
    // const {getUniversities} = useContext(adminContext)

    // useEffect(()=>{
    //     getUniversities()
    // }, [])

    return (
        <>
            <Navbar/>
            <Welcome/>
            <Intro/>
        </>
    );
};

export default MainPage;