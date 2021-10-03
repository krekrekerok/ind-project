// import { Box, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import AddUni from '../components/AddUni';
import Navbar from '../components/Navbar';
import UTable from '../components/UniversityTable';

const AdminPage = () => {
    console.log("Admin");
    return (
        <div>
            <Navbar/>
            <AddUni/>
            <UTable/>
        </div>
    );
};

export default AdminPage;