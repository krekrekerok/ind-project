import React from 'react';
import { VStack,Box, Text, Grid, Button, useColorMode, useColorModeValue, AspectRatio, Image} from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const MainPage = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("gray.500", "gray.200")
    return (
        <>
            <Navbar/>
            <VStack>
                <Box 
                    maxW="960px" 
                    p={10} 
                    m={5} 
                    w="35%" 
                    bg={bg}
                    width = {["90%", "60%", "30%", "15%"]}
                    >
                    <Text textAlign={[ 'left', 'center' ]} fontSize="large" color="green.900">FindU</Text>
                </Box>
                {/* // verbose */}
                <Box display="grid" gridGap={5} gridAutoFlow="row dense">
                Grid
                </Box>
                {/* // shorthand using the `Grid` component */}
                <Grid gap={5} autoFlow="row dense">
                Grid
                </Grid>
                <Box  w="50%" h="400px" border="2px" borderColor="gray.200" borderRadius="xl"
                    backgroundImage="url('https://png.pngtree.com/element_our/png/20180928/beautiful-hologram-water-color-frame-png_119551.jpg')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                />
                <Button 
                    background="gray.700"
                    color ="green.200"
                    _hover={{
                        background: "green.200",
                        color: "gray.700",
                    }}
                    onClick = {toggleColorMode}
                >{colorMode === "light" ? "Dark" : "Light"}
                </Button>
                <Box bg="red.200" w={[200, 300, 400, 500, 800]}>
                    This is a box
                </Box>
                <Text fontSize={{ sm: "18px", base: "24px", md: "40px", lg: "56px", xl: "72px", "2xl": "90px" }}>
                    This is responsive text
                </Text>
                <AspectRatio maxW="400px" ratio={4 / 3}>
                    <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
                </AspectRatio>
            </VStack>
        </>
    );
};

export default MainPage;