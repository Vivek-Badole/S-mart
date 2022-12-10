import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../Redux/products/action";

const CartCounter = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(cart?.length === 0) {
        dispatch(fetchCart());
    }
  },[cart?.length,dispatch])
  return <Box textColor={"white"} bg="black" borderRadius={"50%"} width="20px" height="20px" textAlign={"center"} paddingBottom="20px" position={'absolute'} right="0" top="0">{cart?.length ? cart.length : 0}</Box>;
};

export default CartCounter;
