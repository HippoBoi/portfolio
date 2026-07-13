import { Center, Text, useColorModeValue } from '@chakra-ui/react'

const BottomText = () => {
    const weight = useColorModeValue("bold", "");

    return (
        <Center marginTop={{ base: "8rem", md: "16rem" }} px={4} textAlign="center">
            <Text 
                fontWeight={weight} as={"i"}>
                Background images used in this site are property of RE-LOGIC
            </Text>
        </Center>
    );
}

export default BottomText;