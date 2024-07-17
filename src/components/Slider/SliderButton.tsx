import { Button, useColorMode } from '@chakra-ui/react';

interface Props {
    action: "add" | "sub";
    onClick: (action: "add" | "sub") => void;
    disabled: boolean;
}

const SliderButton = ({ action, onClick, disabled }: Props) => {
    const { colorMode } = useColorMode();
    
    return (
        <Button 
            overflow={"hidden"}
            _hover={{ 
                "transform": `${disabled ? "scale(1.1)" : "scale(1.25)"}`, 
                "color": `${colorMode === "light" ? "blue.600" : "purple.900"}`,
                "bgColor": `${colorMode === "light" ? "gray.300" : "purple.200"}`,
                "transition": "0.5s ease-out"
            }} 
            _active={{ 
                "transform": "scale(0.9)",
                "transition": "0.1s ease-out",
                "bgColor": `${colorMode === "light" ? "blue.300" : "purple.700"}`,
            }}
            fontSize={"30px"} 
            rounded={"25px"}
            zIndex={3}
            onClick={() => onClick(action)}>
            {action === "sub" ? '<' : ">"}
        </Button>
    );
}

export default SliderButton
