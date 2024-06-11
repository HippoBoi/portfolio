import { Box, Center, useColorMode } from "@chakra-ui/react";
import NameCard from "./components/NameCard";
import SwitchTheme from "./components/SwitchTheme";

function App() {
    const {colorMode, setColorMode} = useColorMode();
    
    return (
        <Box>
            <Box position={"absolute"} top={"-10vh"} left={"25vw"}>
                <SwitchTheme colorMode={colorMode} toggleColorMode={() => setColorMode(!colorMode)} />
            </Box>
            <NameCard />
        </Box>
    );
}

export default App;