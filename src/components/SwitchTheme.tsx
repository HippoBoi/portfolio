import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Text, useBreakpointValue } from '@chakra-ui/react'

interface Props {
    language: "esp" | "eng";
    colorMode: string;
    toggleColorMode: () => void;
}

const SwitchTheme = ({ language, colorMode, toggleColorMode }: Props) => {
    const smallScreen = useBreakpointValue({ base: true, lg: false });

    return (
        <IconButton
            size="md"
            marginX={smallScreen ? "10px" : "0px"}
            padding={smallScreen ? "0px" : "20px"}
            icon={colorMode === 'light' ? (
                <HStack>
                    <MoonIcon />
                    <Text>{!smallScreen && language === "eng" ? "Dark Mode" : "Modo Oscuro"}</Text>
                </HStack>
            ) : (
                <HStack>
                    <SunIcon />
                    <Text>{!smallScreen && language === "eng" ? "Dark Mode" : "Modo Claro"}</Text>
                </HStack>
            )}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            mr={ smallScreen ? 0 : 4}
        />
    )
}

export default SwitchTheme
