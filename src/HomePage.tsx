import { Box, Image, Center, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
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

function HomePage() {
    const [showArrow, setShowArrow] = useState(false);
    const {colorMode, toggleColorMode} = useColorMode();
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
        {name: "Hippo Music", description: "epic proyect 3", image: hippomusic},
        {name: "Terra-Calc", description: "epic proyect 2", image: terracalc},
        {name: "Social Wire", description: "epic proyect 3", image: socialred},
        {name: "Draw Share", description: "This project allows users to upload their drawings and share them with other artists. Features account authentication and validations.", 
            image: drawshare},
        {name: "CSV to JSON", description: "epic proyect 3", image: csvtojson},
        {name: "Luis.GG", description: "epic proyect 3", image: luisgg},
    ]
    
    return (      
        <>  
            <TopBG></TopBG>
            
            <Box bgGradient={bgGradient}>
                <Box position={"absolute"} top={"20vh"} left={"25vw"}>
                    <SwitchTheme colorMode={colorMode} toggleColorMode={toggleColorMode} />
                </Box>
                <NameCard />
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
                    Recent Projects 
                </Text>
            </Center>
            <Center marginBottom={"200px"}>
                <ProjectsList projects={projects} />
            </Center>

            <AboutMe />

            <Techonologies />

            <Studies />
            
            {showArrow && (
                <div className="scroll-indicator"></div>
            )}
        </>
    );
}

export default HomePage;