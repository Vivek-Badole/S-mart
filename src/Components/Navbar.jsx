import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Icon,
  Link,
  Image,
  useColorMode,
  Button,
  Input,
  HStack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Profile from "./Profile";
import { BsCart3 } from "react-icons/bs";
import CartCounter from "./CartCounter";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo1 from "../Images/logo1.png";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const Links = ['HOME', 'PRODUCTS', 'ABOUT','REGISTER','LOGIN'];

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "middle", md: "start" }}>
          <Link as={RouterLink} to="/" mr="38px">
            <Image
              w="50px"
              h="50px"
              rounded="20%"
              cursor={"pointer"}
              src={logo1}
            />
          </Link>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
               <Link as={RouterLink} to="/" >HOME</Link>
               <Link as={RouterLink} to="/products" >PRODUCTS</Link>
               <Link as={RouterLink} to="/about" >ABOUT</Link>
               <Link as={RouterLink} to="/register" >REGISTER</Link>
               <Link as={RouterLink} to="/login" >LOGIN</Link>
            </HStack>
          </HStack>
      
        </Flex>

        <Box>
          <Input
            variant="filled"
            placeholder="Search Products"
            htmlSize={50}
            maxWidth="auto"
            
          />
        </Box>
        <Flex px="12px">
          {" "}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link as={RouterLink} to="/cart">
            <Box position={"relative"} padding="0 0.5rem 0 0">
              <CartCounter />
              <Icon as={BsCart3} boxSize="2rem" />
            </Box>
          </Link>
          <Profile />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* <MobileNav /> */}
      </Collapse>
      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
    </Box>
  );
};

export default Navbar;
