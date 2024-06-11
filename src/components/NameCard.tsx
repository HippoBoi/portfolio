import { Box, Card, Text, VStack, Image, HStack, useColorModeValue, useColorMode } from "@chakra-ui/react";
import theme from "../TextStyles";
import logo from "../assets/blank-profile-picture-973460_960_720.webp";
import "./NameCard.css";
import SwitchTheme from "./SwitchTheme";

const NameCard = () => {
    const defaultColor = useColorModeValue("purple.900", "purple.200");
    const lightColor = useColorModeValue("purple.800", "purple.100");
    const darkerColor = useColorModeValue("purple.900", "purple.300");

    return (
        <Box marginTop={"30vh"} marginLeft={"25vw"}>
            <HStack spacing={"120px"}>
                <VStack>
                    <Text 
                        fontSize={"15px"} as={"i"} 
                        opacity={"60%"} color={defaultColor}>
                        Desarrollando soluciones.
                    </Text>
                    <Text 
                        style={theme.textStyles.important} color={lightColor}>
                        Andrés Farfal
                    </Text>
                    <Text 
                        style={theme.textStyles.subtext} 
                        fontSize={"5px"} color={darkerColor}>
                        Full-Stack Developer
                    </Text>
                </VStack>

                <Box boxSize={"200px"} boxShadow={"bg"}>
                    <Image src={logo} boxSize={"100%"} rounded={"80px"} />
                </Box>
            </HStack>
        </Box>
    );
}

export default NameCard;