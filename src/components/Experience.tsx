import { Box, Link, Stack, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'

interface Props {
    language: "eng" | "esp";
}

const Experience = ({ language }: Props) => {
    const { colorMode } = useColorMode();
    const textShadow = useColorModeValue(
        "white",
        "black"
    );

    return (
        <VStack px={4} width="100%">
            <Text
            fontSize={{ base: "34px", md: "50px" }}
                fontWeight={"bold"} 
                marginBottom={"20px"}
                sx={{
                    textShadow: `
                        -1.5px -1.5px 0 ${textShadow},
                        1.5px -1.5px 0 ${textShadow},
                        -1.5px 1.5px 0 ${textShadow},
                        1.5px 1.5px 0 ${textShadow}
                    `,
                }}>
                {language === "eng" ? "Experience" : "Experiencia"}
            </Text>
            <Box borderWidth={"2px"} borderRadius={"lg"} padding={"5px"} width="100%" maxW="900px">
                <VStack>
                    <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={"bold"} textAlign="center">{language === "eng" ? "Mobile App Developer" : "Desarollador de aplicación móvil"}</Text>
                    <Text fontSize={"15px"} as={"i"}>21/06/2024 - {language === "eng" ? "Current" : "Actual"}</Text>
                </VStack>
                <Stack marginTop={"20px"} direction={{ base: "column", md: "row" }} align="center" spacing={2} textAlign={{ base: "center", md: "left" }}>
                    <Text fontWeight={colorMode === "light" ? "bold" : ""}>
                        {language === "eng" ? 
                        "Developing a mobile application for " : 
                        "Desarrollando una aplicación móvil para "}
                        
                    </Text> 
                    <Link 
                        fontWeight={"bold"}
                        href='https://www.safewave.cl'
                        target='_blank'
                        color={"blue.200"}>
                        Safe Wave
                    </Link>
                    <Text fontWeight={colorMode === "light" ? "bold" : ""}>
                        {language === "eng" ? "using Flutter." : "utilizando Flutter."}
                    </Text>
                </Stack>
                <Text fontWeight={colorMode === "light" ? "bold" : ""} textAlign="center">
                    {language === "eng" ? 
                    "I have currently developed user profiles' interface and functionality," : 
                    "Actualmente he desarrollado el perfil de usuario, modificado su interfaz"}
                    <br />
                    {language === "eng" ? 
                    "as well as fixed bugs related to the app's feed." : 
                    "y funcionalidad, y arreglado algunos bugs relacionados al feed de la aplicación."}
                </Text>
            </Box>
        </VStack>
    );
}

export default Experience
