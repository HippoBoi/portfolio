import { useColorModeValue, Text, VStack, HStack, Card, Center, keyframes, useColorMode } from '@chakra-ui/react';

interface Props {
    language: "eng" | "esp";
};

const AboutMe = ({ language }: Props) => {
    const textShadow = useColorModeValue(
        "white",
        "black"
    );
    const textOutline = useColorModeValue(
        "black",
        "black"
    );

    const colorAnimation = keyframes`
        0% { color: red; }
        50% { color: orange; }
        100% { color: red; }
    `;

    const { colorMode } = useColorMode();
    const textColor = useColorModeValue("black", "white");
    const cardColor = useColorModeValue("gray.300", "gray.900");
    const descColor = useColorModeValue("gray.300", "gray.900");
    const accentColor = useColorModeValue("gray.500", "purple.700")

    return (
        <VStack marginBottom={"200px"} width={"100%"}>
            <Text 
                fontSize={"50px"}
                fontWeight={"bold"} 
                sx={{
                    textShadow: `
                        -1.5px -1.5px 0 ${textShadow},
                        1.5px -1.5px 0 ${textShadow},
                        -1.5px 1.5px 0 ${textShadow},
                        1.5px 1.5px 0 ${textShadow}
                    `,
                }}> 
                {language === "eng" ? "About Me" : "Sobre Mi" }
            </Text>
            
            <Card bgColor={cardColor} padding={"10px"} maxWidth={"420px"} overflow={"hidden"} rounded={"40px"}>
                <HStack>
                    <Text 
                        color={textColor} 
                        fontSize={"20px"}
                        sx={{
                            textShadow: `
                                -0.25px -0.25px 0 ${textOutline},
                                0.25px -0.25px 0 ${textOutline},
                                -0.25px 0.25px 0 ${textOutline},
                                0.25px 0.25px 0 ${textOutline}
                            `,
                        }}>
                        {language === "eng" ? "I love solving problems." : "Amo resolver problemas." }
                    </Text>
                    <Text 
                        fontSize={"20px"} 
                        textDecor={"underline"} 
                        textDecorationColor={accentColor}
                        textDecorationThickness={"1px"}
                        sx={{
                            textShadow: `
                                -0.25px -0px 0 ${textOutline},
                                0.25px -0px 0 ${textOutline},
                                -0.25px 0.25px 0 ${textOutline},
                                0.25px 0.25px 0 ${textOutline}
                            `,
                        }}>
                        {language === "eng" ? "That's my job!" : "Es mi trabajo!" }
                    </Text>
                </HStack>
            </Card>

            <Card 
                bgColor={descColor} marginTop={"10px"} paddingX={"20px"} paddingY={"10px"} 
                maxWidth={"700px"} overflow={"hidden"} rounded={"20px"}>
                    {language === "eng" 
                    ? (
                        <Text fontSize={"20px"} textAlign={"center"} fontWeight={`${colorMode === "light" ? "bold" : ""}`}>
                        I'm Andrés, a Full-Stack developer with a passion for finding solutions.<br />
                        My main focus is to create user-friendly services easy to use for any person.
                        </Text>
                    )
                    : (
                        <Text fontSize={"20px"} textAlign={"center"} fontWeight={`${colorMode === "light" ? "bold" : ""}`}>
                        Soy Andrés, un desarrollador Full-Stack apasionado por encontrar soluciones modernas.<br />
                        Me especializo en desarrollar servicios eficientes y amigables para el usuario.
                        </Text>
                    )}
            </Card>

            <Card bgColor={descColor} marginTop={"10px"} paddingX={"20px"} maxWidth={"600px"} overflow={"hidden"}>
                    <Center>
                        <HStack>
                            <Text 
                                fontSize={"20px"}
                                fontWeight={`${colorMode === "light" ? "bold" : ""}`}>
                                {language === "eng" ? "I develop" : "Desarrollo aplicaciones"}
                            </Text>
                            <Text  
                                fontSize={"20px"} 
                                animation={`${colorAnimation} 2s linear infinite`}
                                as={"b"}>
                                {language === "eng" ? "both" : "tanto"} 
                            </Text>
                            <Text 
                                fontSize={"20px"}
                                fontWeight={`${colorMode === "light" ? "bold" : ""}`}>
                                {language === "eng" ? "mobile" : "para móviles"} 
                            </Text>
                            <Text 
                                fontSize={"20px"} 
                                animation={`${colorAnimation} 2s linear infinite`}
                                as={"b"}>
                                {language === "eng" ? "and" : "como"}
                            </Text>
                            <Text 
                                fontSize={"20px"}
                                fontWeight={`${colorMode === "light" ? "bold" : ""}`}>
                                {language === "eng" ? "web applications" : "web"} 
                            </Text>
                        </HStack>
                    </Center>
            </Card>
        </VStack>
    );
}

export default AboutMe
