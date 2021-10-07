// import Image from 'ne.xt/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';

const uImage = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4t6TL37OJ7LSUpAH55eZDgtZB7PuJgMJMUdyaAEw3tTBvexHF'


export default function InfoCard({item}) {
    console.log("U name",item.name);
  return (
    <Stack p={10}>
      <Box
        maxW={'300px'}
        w={[300, 400, 500]}
        h={300}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'2xl'}
        p={6}
        flexDirection = {'column'}
        justifyContent = {'space-between'}
        // overflow={'hidden'}
        >
        <Box
          h={'150px'}
          bg={'gray.500'}
          mt={-6}
          mx={-6}
          mb={6}
            //   rounded={'2xl'}
            //   borderTop = {'wxl'}
          pos={'relative'}>
        <Text 
            position = {'absolute'}
            p = {2}
            fontSize={'sm'}
            fontWeight = {400}
            border = {'1px solid #fff'}
            borderRadius = {'md'}
            bottom = {-2}
            left = {3}
            color={'white'}
            bg = {'whiteAlpha.400'}
            _hover = {{
                bg :'whiteAlpha.700',
                color: 'black',
                fontWeight: 700
            }}
            >БУДУ ПОСТУПАТЬ
          </Text>
          <Text 
            position = {'absolute'}
            p = {1}
            fontSize={'md'}
            fontWeight = {400}
            bottom = {-1}
            right = {3}
            color={'white'}
            >
                {item.tuitionStart==0 ? 
                ("Бесплатное обучение*"
                ):(
                    `От ${item.tuitionStart} сом/год`
                    )}
          </Text>
          <Image
            className = "uImage"
            borderTopRadius= {'2xl'}

            src={uImage}
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'lg'}
            fontFamily={'body'}>
            {item.name}
          </Heading>
        </Stack>
      </Box>
    </Stack>
  );
}

{/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
<Avatar
src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
    alt={'Author'}
  />
  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
  <Text fontWeight={600}>Achim Rolle</Text>
  <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
  </Stack>
</Stack> */}
{/* <Text
  m={7}
  color={'green.500'}
  textTransform={'uppercase'}
  fontWeight={800}
  fontSize={'sm'}
  letterSpacing={1.1}>
  Blog
</Text> */}