import { SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
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
        <VStack marginBottom={{ base: "6rem", md: "12rem" }} px={4}>
            <Text 
                fontSize={{ base: "34px", md: "50px" }}
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

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 14 }} marginTop={"30px"} width="100%" maxW="1100px">
                <Certificate image={sql} title={language === "eng" ? "Full SQL Course" : "Curso SQL Completo"}></Certificate>
                <Certificate image={uni} title={language === "eng" ? "University Student" : "Estudiante Universitario"}></Certificate>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 14 }} marginTop={"30px"} width="100%" maxW="1100px">
                <Certificate image={react} title={language === "eng" ? "React Course" : "Curso de React"}></Certificate>
                <Certificate image={django} title={language === "eng" ? "Django Course" : "Curso de Django"}></Certificate>
            </SimpleGrid>
        </VStack>
    );
}

export default Studies
