import { SimpleGrid, Image, Text, VStack } from '@chakra-ui/react';
import chakra from "../images/logos/chakraui.webp"
import django from "../images/logos/django-icon.webp"
import express from "../images/logos/express.webp"
import js from "../images/logos/logo-javascript.webp";
import react from "../images/logos/logo-react.webp";
import mysql from "../images/logos/mysql.webp";
import nodejs from "../images/logos/node-js-icon-454x512-nztofx17.webp";
import python from "../images/logos/Python_icon.webp";
import router from "../images/logos/react-router-mark-monotone-inverted.png";
import ts from "../images/logos/typescript.webp";
import TechItem from './TechItem';

const TechList = () => {
    const logoMap: { [key: string]: string } = {
        "Chakra UI": chakra,
        "Django": django,
        "Express": express,
        "Javascript": js,
        "React": react,
        "MySQL": mysql,
        "Node JS": nodejs,
        "Python": python,
        "React Router": router,
        "Typescript": ts
    }

    const techs = ["React", "Typescript", "Javascript", "Django", "React Router", "Express", "MySQL", "Chakra UI", "Python", "Node JS"];

    return (
        <VStack width="100%" minH="inherit" justifyContent="center">
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={{ base: 6, md: 8 }} marginTop={"40px"} width="100%" px={0} justifyItems="center">
                {techs.map((logo) => (
                    <TechItem key={logo} name={logo} logo={logoMap[logo]} />
                ))}
            </SimpleGrid>
        </VStack>
    );
}

export default TechList
