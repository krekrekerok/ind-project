import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Center
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function Navbar() {
  // for burger
  const { isOpen, onOpen, onClose } = useDisclosure();
  // for dark/light mode
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <>
      {/* main navbar box */}
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        {/* just navbar wo burger */}
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* burger and close icon that appears in sm */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          {/* nav-left */}
          <HStack spacing={8} alignItems={'center'}>
            {/* logo part */}
            <Box>
              <Link px={2}
                        py={1}
                        rounded={'md'}
                        href="/admin"
                        _hover={{
                          textDecoration: 'none',
                          bg: useColorModeValue('gray.300', 'gray.900'),
                        }} 
              >Logo</Link>
            </Box>
            {/* links to pages */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Link px={2}
                      py={1}
                      rounded={'md'}
                      href="/"
                      _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.200', 'gray.700'),
                      }} >About Us Page</Link>
                <Link px={2}
                      py={1}
                      rounded={'md'}
                      href="/admin"
                      _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.200', 'gray.700'),
                      }} >Add University</Link>
            </HStack>
          </HStack>

          {/* nav-right */}
          <Flex alignItems={'center'}>
            {/* avatar and toggle */}
            <Menu>

                <Button 
                    rounded={'full'}
                    background="gray.700"
                    color ="green.200"
                    m={5}
                    _hover={{
                        background: "green.200",
                        color: "gray.700",
                    }}
                    onClick = {toggleColorMode}
                >{colorMode === "light" ? "Dark" : "Light"}
                </Button>

              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Регистрация</MenuItem>
                <MenuItem>Войти</MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link href="/admin">Admin</Link>
                </MenuItem>
              </MenuList>

            </Menu>

          </Flex>

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                <Link href="/admin">Add University</Link>
                <Link href="/">About Us Page</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <Center fontSize="2xl">
          Add university
        </Center>
      </Box>
    </>
  );
}