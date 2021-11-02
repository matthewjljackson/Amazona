import { FunctionComponent } from 'react';
import Head from 'next/head';
import { Container, HStack, Text, VStack } from '@chakra-ui/react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Layout: FunctionComponent = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue('white', 'gray.800');
  return (
    <VStack h='100vh' spacing={0} bgColor='#203040'>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <HStack bgColor='#203040' w='100%' p='2' justify='space-between'>
        <Text ml='5' fontWeight='bold' textColor='white'>
          Amazona
        </Text>
        <HStack>
          <IconButton
            mr='5'
            onClick={toggleColorMode}
            aria-label='color mode toggle'
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            isRound={true}
            bgColor='#203040'
            color='white'
            size='lg'
          />
        </HStack>
      </HStack>
      <Container h='90%' maxW='container.xl' bgColor={backgroundColor} minH='85vh'>
        {children}
      </Container>
      <VStack bgColor='#203040' p='3'>
        <footer>
          <Text textColor='white'>All rights reserved. Next Amazona.</Text>
        </footer>
      </VStack>
    </VStack>
  );
};

export default Layout;
