import { HStack, Image, Text, VStack } from '@chakra-ui/react';
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

    const firstLine = ["React", "Typescript", "Javascript"];
    const secondLine = ["Django", "React Router", "Express", "MySQL"];
    const thirdLine = ["Chakra UI", "Python", "Node JS"];

    return (
        <VStack>
            <HStack maxWidth={"235px"} spacing={"40px"} marginTop={"40px"}>
                {firstLine.map((logo) => (
                    <TechItem key={logo} name={logo} logo={logoMap[logo]} />
                ))}
            </HStack>
            <HStack spacing={"40px"} marginTop={"25px"}>
                {secondLine.map((logo) => (
                    <TechItem key={logo} name={logo} logo={logoMap[logo]} />
                ))}
            </HStack>
            <HStack spacing={"40px"} marginTop={"25px"}>
                {thirdLine.map((logo) => (
                    <TechItem key={logo} name={logo} logo={logoMap[logo]} />
                ))}
            </HStack>
        </VStack>
    );
}

export default TechList
