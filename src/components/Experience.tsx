import { Box, Link, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'

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
            <Box borderWidth={"2px"} borderRadius={"lg"} p={{ base: 4, md: 6 }} width="100%" maxW="900px">
                <VStack spacing={2}>
                    <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={"bold"} textAlign="center">{language === "eng" ? "Mobile App Developer" : "Desarollador de aplicación móvil"}</Text>
                    <Text fontSize={"15px"} as={"i"}>21/06/2024 - {language === "eng" ? "Current" : "Actual"}</Text>
                </VStack>
                <Text marginTop={"20px"} fontWeight={colorMode === "light" ? "bold" : ""} textAlign="center">
                    {language === "eng" ? "Developing a mobile application for " : "Desarrollando una aplicación móvil para "}
                    <Link
                        fontWeight={"bold"}
                        href='https://www.safewave.cl'
                        target='_blank'
                        color={"blue.200"}>
                        Safe Wave
                    </Link>
                    {language === "eng" ? " using Flutter." : " utilizando Flutter."}
                </Text>
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
