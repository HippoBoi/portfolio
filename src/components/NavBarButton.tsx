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
            padding={"20px"} 
            marginRight={"12px"}
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
