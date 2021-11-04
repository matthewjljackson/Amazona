import type { NextPage } from 'next';
import { Heading, Grid, GridItem } from '@chakra-ui/react';
import Layout from '../components/Layout';
import data from '../utils/data';
import ProductCard from '../components/products/ProductCard';
import IProduct from '../interfaces/IProduct';

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading pl='10' pt='5'>
        Products
      </Heading>
      <Grid h='85%' templateRows='repeat(2, 1fr)' templateColumns='repeat(3, 1fr)' gap='10' p='10'>
        {data.products.map((product: IProduct) => (
          <GridItem boxShadow='lg' key={product.name}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
