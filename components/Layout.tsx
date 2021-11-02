import { FunctionComponent } from 'react';
import Head from 'next/head';
import { Container, HStack, Text } from '@chakra-ui/react';

interface ILayoutProps {}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <HStack bgColor='blue.500'>
        <Text>Amazona</Text>
      </HStack>
      <Container h='90%' bgColor='teal' maxW='container.xl'>
        {children}
      </Container>
      <footer>
        <Text>All rights reserved. Next Amazona.</Text>
      </footer>
    </>
  );
};

export default Layout;
