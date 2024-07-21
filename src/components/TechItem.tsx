import { Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
    name: string;
    logo: string;
}

const TechItem = ({ name, logo }: Props) => {
    const [showName, setShowName] = useState(false);
    const textShadow = useColorModeValue("black", "black");
    
    return (
        <VStack>
            <Image src={logo} width={"51px"}
                border="2px solid transparent"
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
                _hover={{
                    "transform": "scale(1.25)",
                    "outline": '2px solid blue',
                    "outlineOffset": '4px',
                }}
                transition="outline 0.3s ease, outline-offset 0.3s ease"
            />
            
            <Text 
                color={"white"}
                marginTop={"1px"} 
                fontWeight={"bold"} 
                opacity={ showName ? "100%" : "0%" }
                sx={{
                    textShadow: `
                        -1.5px -1.5px 0 ${textShadow},
                        1.5px -1.5px 0 ${textShadow},
                        -1.5px 1.5px 0 ${textShadow},
                        1.5px 1.5px 0 ${textShadow}
                    `,
                }}>
                {name}
            </Text>
        </VStack>
    );
}

export default TechItem
