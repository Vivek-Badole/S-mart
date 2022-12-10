import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductSimple from "../Components/ProductSimple";
import { fetchOrders } from "../Redux/products/action";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.ecommerceData.orders);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        Your Orders
      </Heading>
      {orders.map(product=>{
        return <ProductSimple  key={product.id}
        image={product.image}
        title={product.title}
        price={product.price} />
      })}
    </Box>
  );
};

export default Orders;
