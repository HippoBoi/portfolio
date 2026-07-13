import { Button, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    children?: string;
    onClick: (option: string) => void;
}

const NavBarButton = ({ children = "", onClick }: Props) => {
    const hoverTextColor = useColorModeValue("red.900", "red.100");
    const hoverColor = useColorModeValue("red.100", "red.900");

    return (
        <Button 
            rounded={"60px"}
            padding={{ base: "10px 14px", md: "20px" }}
            marginRight={{ base: "0", md: "12px" }}
            fontSize={{ base: "sm", md: "md" }}
            onClick={() => onClick(children)}
            _hover={{
                "padding": "12px",
                "fontSize": "20px",
                "transition": "0.5s",
                "color": hoverTextColor,
                "bgColor": hoverColor
            }}>
            {children}
        </Button>
    );
}

export default NavBarButton
