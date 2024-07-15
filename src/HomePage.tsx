import { Box, Image, Center, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NameCard from "./components/NameCard";
import SwitchTheme from "./components/SwitchTheme";
import { useEffect, useState } from "react";
import ProjectsList, { ProjectTemplate } from "./components/ProjectsList";
import TopBG from "./components/TopBG";

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

    const images = [
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_0.jpg",
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_1.jpg",
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_2.jpg",
        "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Shen_3.jpg"
    ]

    const projects: ProjectTemplate[] = [
        {name: "proyecto 1", description: "epic proyect", image: images[0]},
        {name: "proyecto 2", description: "epic proyect 2", image: images[1]},
        {name: "proyecto 3", description: "epic proyect 3", image: images[2]}
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
                    Mis Proyectos 
                </Text>
            </Center>
            <Center>
                <ProjectsList projects={projects} />
            </Center>
            
            {showArrow && (
                <div className="scroll-indicator"></div>
            )}
        </>
    );
}

export default HomePage;