import { Center, Text, useColorModeValue } from '@chakra-ui/react'

const BottomText = () => {
    const weight = useColorModeValue("bold", "");

    return (
        <Center marginTop={"260px"}>
            <Text 
                fontWeight={weight} as={"i"}>
                Background images used in this site are property of RE-LOGIC
            </Text>
        </Center>
    );
}

export default BottomText;