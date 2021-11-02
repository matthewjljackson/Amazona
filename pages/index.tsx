import type { NextPage } from 'next';
import { Heading, Grid, GridItem, Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductCard from '../components/products/ProductCard';
import IProduct from '../interfaces/IProduct';

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading>Products</Heading>
      <Grid h='80%' templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap='4'>
        {data.products.map((product: IProduct) => (
          <GridItem key={product.name}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
