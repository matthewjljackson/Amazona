import { FunctionComponent } from 'react';
import IProduct from '../../interfaces/IProduct';
import { Box, Img, Text } from '@chakra-ui/react';
import Shirt from '../../images/pants1.jpg';
import Image from 'next/image';
interface IProductCardProps {
  product: IProduct;
}

const ProductCard: FunctionComponent<IProductCardProps> = ({ product }) => {
  return (
    <Box h='100%' border='1px'>
      <Image src={Shirt} alt={product.name} />
      <Text>{product.name}</Text>
    </Box>
  );
};

export default ProductCard;
