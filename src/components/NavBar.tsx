import { Flex, Box, Link, Button, useColorMode, HStack } from '@chakra-ui/react';
import NavBarButton from './NavBarButton';
import useScrollDirection from '../useScrollDir';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const { colorMode } = useColorMode();
    const scrollDir = useScrollDirection();

    useEffect(() => {
        if (scrollDir === "down") {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [scrollDir])

    return (
        <Flex
            as="nav"
            position="fixed"
            top="1%"
            right="1%"
            width="40%"
            bg={colorMode === "light" ? "white" : "gray.800"}
            color={colorMode === "light" ? "black" : "white"}
            boxShadow="lg"
            padding="20px"
            rounded={"20px"}
            opacity={visible ? "65%" : "0"}
            transform={visible ? "translateY(0)" : "translateY(-100%)"}
            transition="transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
            _hover={{ "opacity": "100%" }}
            zIndex="1000">

            <HStack justifyContent={"space-between"}>

                <NavBarButton >
                    Projects
                </NavBarButton>
                <NavBarButton>
                    About me
                </NavBarButton>
                <NavBarButton>
                    Studies
                </NavBarButton>
                <NavBarButton>
                    Experience
                </NavBarButton>
            </HStack>
        </Flex>
    );
}

export default NavBar
