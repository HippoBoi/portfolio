import { Box, HStack, Link, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'

const Experience = () => {
    const { colorMode } = useColorMode();
    const textShadow = useColorModeValue(
        "white",
        "black"
    );

    return (
        <VStack>
            <Text
                fontSize={"50px"}
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
                Experience
            </Text>
            <Box borderWidth={"2px"} borderRadius={"lg"} padding={"5px"}>
                <VStack>
                    <Text fontSize={"20px"} fontWeight={"bold"}>Mobile App Developer</Text>
                    <Text fontSize={"15px"} as={"i"}>21/06/2024 - Current</Text>
                </VStack>
                <HStack marginTop={"20px"}>
                    <Text fontWeight={colorMode === "light" ? "bold" : ""}>
                        Developing a mobile application for 
                    </Text> 
                    <Link 
                        fontWeight={"bold"}
                        href='https://www.safewave.cl'
                        target='_blank'
                        color={"blue.200"}>
                        Safe Wave
                    </Link>
                    <Text fontWeight={colorMode === "light" ? "bold" : ""}>
                        using Flutter.
                    </Text>
                </HStack>
                <Text fontWeight={colorMode === "light" ? "bold" : ""}>
                    I have currently developed user profiles' interface and functionality,
                    <br />
                    as well as fixed bugs related to the app's feed.
                </Text>
            </Box>
        </VStack>
    );
}

export default Experience
