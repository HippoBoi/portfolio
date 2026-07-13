import { Box, Flex, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import theme from "../TextStyles";
import foto from "../assets/yo.webp";
import "./NameCard.css";

interface Props {
    language: "eng" | "esp";
}

const NameCard = ({ language }: Props) => {
    const defaultColor = useColorModeValue("#0f1321", "purple.200");
    const lightColor = useColorModeValue("#0f1321", "purple.100");
    const darkerColor = useColorModeValue("#1d2336", "purple.300");

    return (
        <Box px={{ base: 4, md: 8 }}>
            <Flex
                maxW="1100px"
                mx="auto"
                direction={{ base: "column-reverse", md: "row" }}
                align="center"
                justify="center"
                gap={{ base: 8, md: 20 }}>
                <VStack align={{ base: "center", md: "flex-start" }} spacing={1} textAlign={{ base: "center", md: "left" }}>
                    <Text 
                        fontSize={{ base: "14px", md: "15px" }} as={"i"} 
                        opacity={"60%"} color={defaultColor}
                        textShadow={"0px 2px 4px rgba(0, 0, 0, 0.4)"}>
                        {language === "eng" ? "Hello, I'm" : "Hola, soy"}
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

                <Box boxSize={{ base: "170px", md: "200px" }}>
                    <Image src={foto} boxSize={"100%"} rounded={{ base: "48px", md: "80px" }} />
                </Box>
            </Flex>
        </Box>
    );
}

export default NameCard;