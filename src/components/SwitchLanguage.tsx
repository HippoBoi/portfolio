import { HStack, useBreakpointValue, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react';

interface Props {
    language: "eng" | "esp";
    onClick: (language: "eng" | "esp") => void;
}

const SwitchLanguage = ({ language, onClick }: Props) => {
    const smallScreen = useBreakpointValue({ base: true, lg: false });
    const buttonColor = useColorModeValue("white", "black");

    return (
        <VStack>
            <Text fontWeight={"bold"} as={"i"}>{language === "eng" ? "Language" : "Idioma"}</Text>
            <HStack>
                <Button
                    colorScheme={language === "eng" ? buttonColor : "gray"}
                    size="md"
                    borderWidth={"2px"}
                    borderRadius={"10px"}
                    marginX={smallScreen ? "10px" : "0px"}
                    padding={smallScreen ? "0px" : "20px"}
                    onClick={() => onClick("eng")}>
                    English
                </Button>

                <Button
                    colorScheme={language === "esp" ? buttonColor : "gray"}
                    borderWidth={"2px"}
                    borderRadius={"10px"}
                    size="md"
                    marginX={smallScreen ? "10px" : "0px"}
                    padding={smallScreen ? "0px" : "20px"}
                    onClick={() => onClick("esp")}>
                    Español
                </Button>
            </HStack>
        </VStack>
    );
}

export default SwitchLanguage;