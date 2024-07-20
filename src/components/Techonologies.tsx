import { Card, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import mushBG from "../images/mushroom.webp"
import { Parallax } from 'react-parallax';
import TechList from './TechList';

const Techonologies = () => {
    const { colorMode } = useColorMode();
    const textShadow = useColorModeValue(
        "white",
        "black"
    );
    const textOutline = useColorModeValue(
        "black",
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

            <Text fontWeight={colorMode === "light" ? "bold" : ""} as={"i"}>
                Tools that I use for my job
            </Text>

            <Card width={"100%"} height={"400px"} bgColor={'#010203'} rounded={0}>
                <Parallax bgImage={mushBG}
                    strength={300}
                    style={{ "height": "100%" }}>
                    
                    <TechList />
                </Parallax>
            </Card>
        </VStack>
    );
}

export default Techonologies
