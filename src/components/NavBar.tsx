import { Flex, Box, Link, Button, useColorMode, HStack } from '@chakra-ui/react';
import NavBarButton from './NavBarButton';
import useScrollDirection from '../useScrollDir';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const { colorMode } = useColorMode();
    const scrollDir = useScrollDirection();

    const projectsPos = 550;
    const about = 1150;
    const studiesPos = 2420;

    const moveScroll = (option: string) => {
        let newPos = 0;

        switch(option) {
            case "Projects":
                newPos = projectsPos;
            break;
            case "About me":
                newPos = about;
            break;
            case "Studies":
                newPos = studiesPos;
            break;
            case "Experience":
                newPos = studiesPos;
            break;
        }

        setTimeout(() => {
            window.scrollTo({
              top: newPos,
              behavior: 'smooth',
            });
        }, 140);
    }

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

                <NavBarButton onClick={(option) => moveScroll(option)} >
                    Projects
                </NavBarButton>
                <NavBarButton onClick={(option) => moveScroll(option)}>
                    About me
                </NavBarButton>
                <NavBarButton onClick={(option) => moveScroll(option)}>
                    Studies
                </NavBarButton>
                <NavBarButton onClick={(option) => moveScroll(option)}>
                    Experience
                </NavBarButton>
            </HStack>
        </Flex>
    );
}

export default NavBar
