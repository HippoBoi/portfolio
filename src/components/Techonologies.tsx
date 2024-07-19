import { Card, Text, useColorModeValue, VStack } from '@chakra-ui/react';

const Techonologies = () => {
    const textShadow = useColorModeValue(
        "white",
        "black"
    );

    return (
        <VStack marginBottom={"160px"}>
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
                Technologies
            </Text>

            <Text as={"i"}>
                Tools that I use for my job
            </Text>

            <Card width={"700px"} height={"300px"}>

            </Card>
        </VStack>
    );
}

export default Techonologies
