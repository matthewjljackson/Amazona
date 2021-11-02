import type { NextPage } from 'next';
import { Heading, Grid, GridItem, Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import data from '../utils/data';

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading>Products</Heading>
      <Grid h='80%' templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap='4'>
        {data.products.map((product) => (
          <GridItem key={product.name}>
            <Box h='100%' bg='green'>
              {product.name}
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
