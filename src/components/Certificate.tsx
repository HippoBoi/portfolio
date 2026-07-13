import { VStack, Image, Text, useColorModeValue, Box } from '@chakra-ui/react'

interface Props {
    image: string;
    title: string;
}

const Certificate = ({ image, title }: Props) => {
    const textShadow = useColorModeValue("white", "black");
    const borderColor = useColorModeValue("gray.400", "gray.800");
    const textColor = useColorModeValue("black", "white");

    return (
        <VStack width="100%" spacing={4}>
            <Text 
                align={'center'} 
            fontSize={{ base: "22px", md: "32px" }}
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
                borderWidth={{ base: "3px", md: "5px" }} 
                borderRadius={{ base: "16px", md: "20px" }} 
                borderColor={borderColor}
                overflow={"hidden"}
                _hover={{ "cursor": "pointer", '> img': { "transform": "scale(1.1)" } }}>
                <Image src={image} width={{ base: "100%", md: "450px" }} height={{ base: "240px", md: "350px" }} objectFit="cover" sx={{ "transition": "transform 0.15s ease-out" }} />
            </Box>
        </VStack>
    );
}

export default Certificate
