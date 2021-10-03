import React, { useState, useEffect } from 'react';
import { collection, doc, onSnapshot, setDoc, addDoc } from '@firebase/firestore';
import db from '../Firebase';
import { isEmpty } from 'lodash';
import { Container, Grid, HStack, Stack } from '@chakra-ui/layout';
import { Text, Input, InputGroup, InputLeftElement, Button, FormControl } from "@chakra-ui/react"
import { GiTrophyCup, GiInfo, GiWhiteTower, GiChecklist, GiCoins } from 'react-icons/gi'
import { FaFileInvoice, FaLink, FaFileContract } from 'react-icons/fa'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption} from "@chakra-ui/react"

// import { useHistory } from 'react-router';

const AddUni = () => {
    // const [name, setName] = useState([])
    // const values = {
    //     name: "",
    //     rank: "",
    //     status:"",
    //     totalFaculty: "",
    //     tuitionStart: "",
    //     aveForGrant: "",
    //     grantCount: "",
    //     link: "",
    // }

    const [uInfo, setUInfo] = useState([]) //uniInfo
    const {
        name,
        rank, 
        status, 
        totalFaculty, 
        tuitionStart,
        aveForGrant,
        grantCount,
        link
        } = uInfo

        console.log("Uinfo",uInfo)
        useEffect(
            () => 
              onSnapshot(collection(db, "universities"), (snapshot) => 
                setUInfo(snapshot.docs.map((doc) => (doc.data())))
              ),
            []
        )

    const handleInputChange = (e) => {
        let obj = {
            ...uInfo,
            [e.target.name]: e.target.value
        }
        setUInfo(obj)
        console.log(uInfo);
    }

    const handleClick = async() => {
        const collectionRef = collection(db, "universities")
        const payload = {
            name,
            rank,
            status,
            totalFaculty,
            tuitionStart,
            aveForGrant,
            grantCount,
            link
        }

        await addDoc(collectionRef, payload)
        console.log("button clicked");
        // const docRef = doc(db, "universities", "4")
        // await setDoc(docRef, payload)
    }

    const handleSubmit = (e) => {
        e.preventDeafault()
        console.log("Added");
        // history = useHistory()
        // history.push("/utable")
    }
    return (
        <>
        <Container p={8} maxW = "container.sm" bg="cyan.800">
            <form action = "submit" 
            onSubmit = {handleSubmit}
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
                                value={name}
                                name = "name"
                                placeholder="University name" 
                                onChange = {handleInputChange}
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
                                    value={rank}
                                    name = "rank"
                                    placeholder="Rank"
                                    onChange = {handleInputChange}
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
                                    value={totalFaculty}
                                    name = "totalFaculty"
                                    placeholder="Number of faculties" 
                                    onChange = {handleInputChange}
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
                                    value={tuitionStart}
                                    name = "tuitionStart"
                                    placeholder="Min tuition fee" 
                                    onChange = {handleInputChange}
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
                                    value={status}
                                    name = "status"
                                    placeholder="Status" 
                                    onChange = {handleInputChange}
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
                                    value={aveForGrant}
                                    name = "aveForGrant"
                                    placeholder="Average score for grant" 
                                    onChange = {handleInputChange}
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
                                    value={grantCount}
                                    name = "grantCount"
                                    placeholder="Total grants" 
                                    onChange = {handleInputChange}
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
                                value={link}
                                name = "link"
                                placeholder="University link"
                                onChange = {handleInputChange}
                                 />
                        </InputGroup>
                    </FormControl>
                    <Button
                        // onClick = {() => {
                        //     if (!uInfo.name.trim() ||
                        //         !uInfo.rank.trim() ||
                        //         !uInfo.status.trim() ||
                        //         !uInfo.totalFaculty.trim() ||
                        //         !uInfo.tuitionStart.trim() ||
                        //         !uInfo.aveForGrant.trim() ||
                        //         !uInfo.grantCount.trim() ||
                        //         !uInfo.link.trim()
                        //     ){
                        //         alert("fill all blanks")
                        //         return
                        //     }
                        //     handleClick()
                        // }}
                        > Save 
                    </Button>
                </Stack>                
            </form>
        </Container>
        {/* <Container p={5} maxW = "container.lg" bg="cyan.500"> */}
            <Table variant="striped">
                <TableCaption>2021 updated</TableCaption>
                <Thead>
                    
                    <Tr>
                        <Th isNumeric>№</Th>
                        <Th>University</Th>
                        <Th isNumeric>Rank</Th>
                        <Th isNumeric>Number of faculties</Th>
                        <Th isNumeric>Min tuition fee</Th>
                        <Th>Status</Th>
                        <Th isNumeric>Mean for grant</Th>
                        <Th isNumeric>Total grants</Th>
                        <Th>Link</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {/* {uInfo.map((row, index) => (
                        <Tr key = {index}>
                            <Td isNumeric>{index + 1}</Td>
                            <Td>{row.name}</Td>
                            <Td>{row.rank}</Td>
                            <Td isNumeric>{row.totalFaculty}</Td>
                            <Td isNumeric>{row.tuitionStart}</Td>
                            <Td>{row.status}</Td>
                            <Td isNumeric>{row.aveForGrant}</Td>
                            <Td isNumeric>{row.grantCount}</Td>
                            <Td>{row.link}</Td>
                        </Tr>
                    ))} */}
                </Tbody>
            </Table>
        {/* </Container> */}
        </>
    );
};

export default AddUni;