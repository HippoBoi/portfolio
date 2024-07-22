import { HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import uni from "../images/certificates/ggg.webp"
import sql from "../images/certificates/sq.webp"
import react from "../images/certificates/react.webp"
import django from "../images/certificates/django.webp"

import Certificate from './Certificate';

interface Props {
    language: "eng" | "esp";
}

const Studies = ({ language }: Props) => {
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
                {language === "eng" ? "Certificates" : "Certificados"} 
            </Text>

            <HStack spacing={"60px"} marginTop={"30px"}>
                <Certificate image={sql} title={language === "eng" ? "Full SQL Course" : "Curso SQL Completo"}></Certificate>
                <Certificate image={uni} title={language === "eng" ? "University Student" : "Estudiante Universitario"}></Certificate>
            </HStack>
            <HStack spacing={"60px"} marginTop={"30px"}>
                <Certificate image={react} title={language === "eng" ? "React Course" : "Curso de React"}></Certificate>
                <Certificate image={django} title={language === "eng" ? "Django Course" : "Curso de Django"}></Certificate>
            </HStack>
        </VStack>
    );
}

export default Studies
