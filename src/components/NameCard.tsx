import { Box, Text, VStack, Image, HStack, useColorModeValue } from "@chakra-ui/react";
import theme from "../TextStyles";
import foto from "../assets/yo.webp";
import "./NameCard.css";

const NameCard = () => {
    const defaultColor = useColorModeValue("purple.900", "purple.200");
    const lightColor = useColorModeValue("#0f1321", "purple.100");
    const darkerColor = useColorModeValue("#1d2336", "purple.300");

    return (
        <Box marginTop={"30vh"} marginLeft={"25vw"}>
            <HStack spacing={"120px"}>
                <VStack>
                    <Text 
                        fontSize={"15px"} as={"i"} 
                        opacity={"60%"} color={defaultColor}
                        textShadow={"0px 2px 4px rgba(0, 0, 0, 0.4)"}>
                        Desarrollando soluciones.
                    </Text>
                    <Text 
                        style={theme.textStyles.important} color={lightColor}
                        textShadow={"0px 6px 8px rgba(0, 0, 0, 0.4)"}>
                        Andrés Farfal
                    </Text>
                    <Text 
                        style={theme.textStyles.subtext} color={darkerColor}
                        textShadow={"0px 6px 6px rgba(0, 0, 0, 0.4)"}>
                        Full-Stack Developer
                    </Text>
                </VStack>

                <Box boxSize={"200px"} >
                    <Image src={foto} boxSize={"100%"} rounded={"80px"} />
                </Box>
            </HStack>
        </Box>
    );
}

export default NameCard;