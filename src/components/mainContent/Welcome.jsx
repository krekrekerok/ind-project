import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Welcome() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://st4.depositphotos.com/5493232/21669/i/600/depositphotos_216694098-stock-photo-empty-brown-wooden-table-coffee.jpg)'
          // 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={600}
              lineHeight={2.8}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Поступай правильно!
            </Text>
            <Text
              color={'white'}
              fontWeight={300}
              lineHeight={1.5}
              fontSize={useBreakpointValue({ base: 'lg', md: '2xl' })}>
              FindU.kg — это самый большой каталог учебных заведений и программ в КР.
              <br/>
              Мы помогаем людям выбирать образование, а учебным заведениям — находить своих студентов.
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'gray.300'}
                rounded={'full'}
                color={'black'}
                _hover={{ bg: 'blue.500' }}>
                Смотреть ВУЗы
              </Button>
              <Button
                bg={'whiteAlpha.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                    Перейти к избранным
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }