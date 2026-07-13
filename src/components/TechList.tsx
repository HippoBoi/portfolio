import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
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
import vue from "../images/logos/vue.webp";
import php from "../images/logos/php.webp";
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
        "Typescript": ts,
        "Vue": vue,
        "PHP": php
    }

    const techs = ["React", "Typescript", "Javascript", "Django", "React Router", "Express", "MySQL", "Chakra UI", "Python", "Node JS", "Vue", "PHP"];

    return (
        <VStack width="100%" minH="inherit" justifyContent="center">
            <Wrap
                marginTop="40px"
                width="100%"
                px={0}
                justify="center"
                spacing={{ base: 6, md: 8 }}>
                {techs.map((logo) => (
                    <WrapItem
                        key={logo}
                        justifyContent="center"
                        width={{
                            base: "calc((100% - 1.5rem) / 2)",
                            sm: "calc((100% - 3rem) / 3)",
                            md: "calc((100% - 6rem) / 4)",
                            lg: "calc((100% - 8rem) / 5)",
                        }}>
                        <TechItem name={logo} logo={logoMap[logo]} />
                    </WrapItem>
                ))}
            </Wrap>
        </VStack>
    );
}

export default TechList
