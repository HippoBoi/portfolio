import { VStack, Image, Text, Card, useColorMode, useColorModeValue, CardBody, Box } from '@chakra-ui/react'
import { transform } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
    image: string;
    title: string;
}

const Certificate = ({ image, title }: Props) => {
    const textShadow = useColorModeValue("white", "black");
    const borderColor = useColorModeValue("gray.400", "gray.800");
    const textColor = useColorModeValue("black", "white");

    return (
        <VStack>
            <Text 
                align={'center'} 
                fontSize={"32px"}
                as={"b"}
                color={textColor}
                sx={{
                    textShadow: `
                        -0.65px -0.65px 0 ${textShadow},
                        0.65px -0.65px 0 ${textShadow},
                        -0.65px 0.65px 0 ${textShadow},
                        0.65px 0.65px 0 ${textShadow}
                    `,
                }}>
                {title}
            </Text>

            <Box 
                borderWidth={"5px"} 
                borderRadius="20px" 
                borderColor={borderColor}
                overflow={"hidden"}
                _hover={{ "cursor": "pointer", '> img': { "transform": "scale(1.1)" } }}>
                <Image src={image} width={"450px"} height={"350px"} sx={{ "transition": "transform 0.15s ease-out" }} />
            </Box>
        </VStack>
    );
}

export default Certificate
