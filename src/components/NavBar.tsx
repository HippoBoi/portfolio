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

    if (!visible) {
        return null;
    }

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
            opacity={"65%"}
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
