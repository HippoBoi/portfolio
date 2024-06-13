import { Box, Center, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NameCard from "./components/NameCard";
import SwitchTheme from "./components/SwitchTheme";
import { useEffect, useState } from "react";

function App() {
    const [showArrow, setShowArrow] = useState(false);
    const {colorMode, toggleColorMode} = useColorMode();
    const bgGradient = useColorModeValue(
        "linear(to-r, #ededed, #dae2ed)",
        "linear(to-r, #202630, #292438)"
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
    
    return (
        <>
        <Box bgGradient={bgGradient}>
            <Box position={"absolute"} top={"-10vh"} left={"25vw"}>
                <SwitchTheme colorMode={colorMode} toggleColorMode={toggleColorMode} />
            </Box>
            <NameCard />
        </Box>

        <Center marginTop={"140px"}>
            <Text> Mis Proyectos </Text>
        </Center>
        <Center>
            <NameCard />
        </Center>
        
        {showArrow && (
            <div className="scroll-indicator"></div>
        )}
        </>
    );
}

export default App;