import React, { useState, useEffect, useContext } from 'react';
import { collection, doc, onSnapshot, setDoc, addDoc, getDoc } from '@firebase/firestore';
import db from '../Firebase';
import { isEmpty } from 'lodash';
import { Container, Grid, HStack, Stack } from '@chakra-ui/layout';
import { Link, Box, Input, InputGroup, InputLeftElement, Button, FormControl } from "@chakra-ui/react"
import { GiTrophyCup, GiInfo, GiWhiteTower, GiChecklist, GiCoins } from 'react-icons/gi'
import { FaFileInvoice, FaLink, FaFileContract } from 'react-icons/fa'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption} from "@chakra-ui/react"
import { adminContext } from '../context/AdminContext';
import { handleEdit } from '../helpers/handles';
import {useHistory, useParams } from 'react-router';


const EditUni = () => {
    const {createUniversity} = useContext(adminContext)
    const { id } = useParams();
    const history = useHistory()

    console.log(id);
    // fb start
    const [uniList, setUniList] = useState([])
    
    console.log("uniList",uniList)
    const [EditedUni, setEditedUni] = useState({})

        useEffect(
            () => 
            onSnapshot(doc(db, "universities", id), (doc) => 
              setUniList(doc.data())
              ),
            []
        )

        // fb end
    const handleInputs = (e) => {
        let obj = {
            ...EditedUni,
            [e.target.name]: e.target.value
        }
        setEditedUni(obj)
    }
    console.log(EditedUni);


    return (
        <>
        <Container p={8} maxW = "container.sm" bg="cyan.800">
            <form action = "submit" 
            // onSubmit = {handleSubmit}
            >
                <Stack spacing={3} color="gray.500">
                    {/* name */}
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<GiInfo color="grey.500" />}
                            />
                            <Input
                                defaultValue={uniList.name}
                                name = "name"
                                placeholder="University name" 
                                onChange = {handleInputs}
                                />
                        </InputGroup>
                    </FormControl>

                    <Grid templateColumns="repeat(3, 1fr)" gap={4} >

                        {/* rank */}
                        <FormControl isRequired>
                          <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<GiTrophyCup color="grey.500" />}
                                />
                                <Input 
                                    w="100%" 
                                    type="number" 
                                    defaultValue={uniList.rank}
                                    name = "rank"
                                    placeholder="Rank"
                                    onChange = {handleInputs}
                                    />
                          </InputGroup>
                        </FormControl>

                        {/* total faculties */}
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<GiChecklist color="grey.500" />}
                                />
                                <Input 
                                    w="100%" 
                                    type="number" 
                                    defaultValue={uniList.totalFaculty}
                                    name = "totalFaculty"
                                    placeholder="Number of faculties" 
                                    onChange = {handleInputs}
                                    />
                            </InputGroup>
                        </FormControl>

                        {/* tuition fee */}
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<GiCoins color="grey.500" />}
                                />
                                <Input 
                                    w="100%" 
                                    type="number" 
                                    defaultValue={uniList.tuitionStart}
                                    name = "tuitionStart"
                                    placeholder="Min tuition fee" 
                                    onChange = {handleInputs}
                                    />
                            </InputGroup>
                        </FormControl>

                        {/* status */}
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<GiWhiteTower color="grey.500" />}
                                />
                                <Input 
                                    defaultValue={uniList.status}
                                    name = "status"
                                    placeholder="Status" 
                                    onChange = {handleInputs}
                                    />
                            </InputGroup>
                        </FormControl>

                        {/* grant score */}
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<FaFileContract color="grey.500" />}
                                />
                                <Input 
                                    type="number" 
                                    defaultValue={uniList.aveForGrant}
                                    name = "aveForGrant"
                                    placeholder="Average score for grant" 
                                    onChange = {handleInputs}
                                    />
                            </InputGroup>
                        </FormControl>

                        {/* total n grants */}
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<FaFileInvoice color="grey.500" />}
                                />
                                <Input 
                                    type="number" 
                                    defaultValue={uniList.grantCount}
                                    name = "grantCount"
                                    placeholder="Total grants" 
                                    onChange = {handleInputs}
                                    />
                            </InputGroup>
                        </FormControl>
                    </Grid>

                    {/* link */}
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaLink color="grey.500" />}
                            />
                            <Input 
                                defaultValue={uniList.link}
                                name = "link"
                                placeholder="University link"
                                onChange = {handleInputs}
                                 />
                        </InputGroup>
                    </FormControl>
                    <Button
                    onClick = {(e) => {
                        e.preventDefault()
                        handleEdit(id, EditedUni)
                        console.log("clicked");
                        history.push("/admin")
                    }}
                        > Save 
                    </Button>
                </Stack>                
            </form>
        </Container>
        </>
    );
};

export default EditUni;