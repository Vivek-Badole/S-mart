import { Box, Flex, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "../Components/FilterComponent";
import { fetchData } from "../Redux/products/action";
import { Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import ProductSimple from "../Components/ProductSimple";

const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, products?.length, searchParams]);
  return (
    <Box>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
        <Box minWidth={"15rem"}>
          <FilterComponent />
        </Box>
        <Box>
          <Heading as="h3">Products</Heading>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products.map((product) => {
              return (
                <ProductSimple
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Products;
