import { FunctionComponent } from 'react';
import IProduct from '../../interfaces/IProduct';
import { Box, Text, HStack, Button } from '@chakra-ui/react';
import Image from 'next/image';
interface IProductCardProps {
  product: IProduct;
}

const ProductCard: FunctionComponent<IProductCardProps> = ({ product }) => {
  return (
    <Box _hover={{ transform: 'scale(1.03)' }} transition='all .1s ease-in-out'>
      <Image src={product.image} alt={product.name} width='225' height='225' layout='responsive' />
      <Text p='3'>{product.name}</Text>
      <HStack pl='3'>
        <Text>${product.price}</Text>
        <Button size='sm' variant='link'>
          ADD TO CART
        </Button>
      </HStack>
    </Box>
  );
};

export default ProductCard;
