import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Heading,Image,Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Checkout from '../Components/Checkout';
import { addOrder, removeProductCart } from '../Redux/products/action';

const Cart = () => {
  
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch(removeProductCart(id));
  }
 const checkoutHandler = ()=>{
  dispatch(addOrder(cart));
 }
  return (
    <Box>
      <Heading as='h2' size='xl' textAlign='center'>Cart</Heading>
      {cart.length && cart.map(product=>{
        return <CartItem key={product.id} id={product.id} image={product.image} title={product.title} description={product.description} price={product.price} removeProduct={removeProduct} />
      })}
      
     <Checkout  cart={cart} checkoutHandler={checkoutHandler} /> 
          
    </Box>
  )
}
function CartItem({id,title,image,price,description,removeProduct}){
  return(
    <Box border={'1px solid red'} rounded='lg' width='fit-content' margin='auto' marginBottom='2rem'>
      <Stack direction={{base:"column" ,md : "row"}} justifyContent="center" alignItems="center">
      <Box height={'300px'} width="300px" position='relative' padding='0 1rem' _after={{
            transition: "all .3s ease",
            content: '""',
            w: "80%",
            h: "80%",
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform : `translate(-50%,-50%)`,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}>
      <Image
            rounded={"lg"}
            height={300}
            width={300}
            objectFit={"contain"}
            src={image}
          />
      </Box>
      <Box height={'300px'} width="300px" >
        <Stack p={4}>
        <Heading as='h3' size='lg'>{title}</Heading>
        <Text noOfLines={1}>
          {description}
        </Text>
        <Text color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}> ₹{price}</Text>
              <Button variant='solid' leftIcon={<DeleteIcon />} onClick={()=>removeProduct(id)} >Remove</Button>
        </Stack>
      </Box>
      </Stack>
    </Box>
  )
}

export default Cart