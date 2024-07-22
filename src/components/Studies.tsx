import { HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import uni from "../images/certificates/ggg.webp"
import sql from "../images/certificates/sq.webp"
import react from "../images/certificates/react.webp"
import django from "../images/certificates/django.webp"

import Certificate from './Certificate';

const Studies = () => {
    const textShadow = useColorModeValue(
        "white",
        "black"
    );
    
    return (
        <VStack marginBottom={"200px"}>
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
                Certificates
            </Text>

            <HStack spacing={"60px"} marginTop={"30px"}>
                <Certificate image={sql} title="Full SQL Course"></Certificate>
                <Certificate image={uni} title="University Student"></Certificate>
            </HStack>
            <HStack spacing={"60px"} marginTop={"30px"}>
                <Certificate image={react} title="React Course"></Certificate>
                <Certificate image={django} title="Django Course"></Certificate>
            </HStack>
        </VStack>
    );
}

export default Studies
