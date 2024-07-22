import { Box, Center, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NameCard from "./components/NameCard";
import SwitchTheme from "./components/SwitchTheme";
import { useEffect, useState } from "react";
import ProjectsList, { ProjectTemplate } from "./components/ProjectsList";
import TopBG from "./components/TopBG";
import Studies from "./components/Studies";
import AboutMe from "./components/AboutMe";
import Techonologies from "./components/Techonologies";
import drawshare from "./images/projects/drawshare2.webp"
import terracalc from "./images/projects/terra-calc.webp"
import hippomusic from "./images/projects/hippo-music.webp"
import csvtojson from "./images/projects/csv-to-json.webp"
import luisgg from "./images/projects/luisgg.webp"
import socialred from "./images/projects/socialred.webp"
import Experience from "./components/Experience";
import BottomText from "./components/BottomText";
import SwitchLanguage from "./components/SwitchLanguage";

function HomePage() {
    const [showArrow, setShowArrow] = useState(false);
    const {colorMode, toggleColorMode} = useColorMode();
    const [language, setLanguage] = useState<"eng" | "esp">("eng");
    const bgGradient = useColorModeValue(
        "linear(to-r, #edf1f5, #d3e4f2)",
        "linear(to-r, #202630, #372d45)"
    );
    const textShadow = useColorModeValue(
        "white",
        "black"
    );

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setShowArrow(false);
        }
        else {
            setShowArrow(true);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const projects: ProjectTemplate[] = [
        {name: "Hippo Music", 
            description: `${language === "eng" ? 
                "I developed this website to upload, share and store some my songs. Built with React and CSS." : 
                "Desarrollé este sitio web para alojar y compartir algunas de mis canciones. Utilicé React y CSS."}`, 
            image: hippomusic, link: "https://hippo-music.vercel.app"},
        {name: "Terra-Calc", 
            description: `${language === "eng" ?
                "This project features a working calculator to gather information about the video-game Terraria. Built with React and Chakra UI." :
                "Este proyecto presenta una calculadora para obtener información acerca del video-juego Terraria. Utilicé React y Chakra UI"
            }`, 
            image: terracalc, link: "https://terra-calc.vercel.app"},
        {name: "Social Wire", 
            description: `${language === "eng" ? 
                "This project features the layout of a social media application and functionality. Built with React, Chakra UI and Bootstrap." :
                "Este proyecto presenta el diseño y funcionalidad de una red social. Para este proyecto utilicé React, Chakra UI y Bootstrap."
            }`, 
            image: socialred, link: "https://social-red.vercel.app"},
        {name: "Draw Share", 
            description: `${language === "eng" ? 
                "This project allows users to upload and share their drawings. Features account authentication and validations." :
                "Este proyecto permite a los usuarios compartir y subir dibujos. Presenta autenticación de inicio de sesión y validaciones."
            }`, 
            image: drawshare, link: "https://draw-share-indol.vercel.app"},
        {name: "CSV to JSON", 
            description: `${language === "eng" ?
                "I developed this project to automatize the simple task of converting a file. Built using React and Express for the API Rest." :
                "Desarrollé este proyecto para automatizar la simple tarea de convertir un archivo. Utilicé React y Express para la API Rest."
            }`, 
            image: csvtojson, link: "https://csv-to-json-nine.vercel.app"},
        {name: "Luis.GG", 
            description: `${language === "eng" ? 
                "This projects gathers player data from the official Riot Games API and displays the most important for the user." :
                "Este proyecto recolecta información de la API oficial de Riot Games. Muestra en pantalla la más relevante para el usuario."
            }`, 
            image: luisgg, link: "https://luisgg.vercel.app"},
    ]
    
    return (      
        <>  
            <TopBG></TopBG>
            
            <Box bgGradient={bgGradient}>
                <Box position={"absolute"} top={"20vh"} left={"25vw"}>
                    <SwitchTheme language={language} colorMode={colorMode} toggleColorMode={toggleColorMode} />
                </Box>
                <Box position={"absolute"} top={"15.1vh"} left={"42vw"}>
                    <SwitchLanguage language={language} onClick={(lang: "eng" | "esp") => setLanguage(lang)} />
                </Box>
                <NameCard language={language} />
            </Box>

            <Center marginTop={"205px"} marginBottom={"25px"}>
                <Text 
                    fontSize={"20px"}
                    fontWeight={"bold"} 
                    sx={{
                        textShadow: `
                            -1.5px -1.5px 0 ${textShadow},
                            1.5px -1.5px 0 ${textShadow},
                            -1.5px 1.5px 0 ${textShadow},
                            1.5px 1.5px 0 ${textShadow}
                        `,
                    }}> 
                    {language === "eng" ? "Recent Projects" : "Proyectos Recientes"}
                </Text>
            </Center>
            <Center marginBottom={"200px"}>
                <ProjectsList projects={projects} />
            </Center>

            <AboutMe language={language} />

            <Techonologies language={language} />

            <Studies language={language} />

            <Experience language={language} />

            <BottomText />
            
            {showArrow && (
                <div className="scroll-indicator"></div>
            )}
        </>
    );
}

export default HomePage;