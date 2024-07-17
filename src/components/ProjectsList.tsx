import { Box, Heading, Image, Text, HStack, Button, useColorMode, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export interface ProjectTemplate {
    name: string;
    description: string;
    image: string;
}

interface Props {
    projects: ProjectTemplate[];
}

const ProjectsList = ({ projects }: Props) => {
    const [index, setIndex] = useState(1);
    const { colorMode } = useColorMode();

    const changeIndex = (action: 'add' | 'sub') => {
        if (action === 'add') {
            let indexValue = index + 1;

            if (index + 1 > projects.length - 1) {
                indexValue = 0;
            }
            console.log('indexvalue: ' + indexValue);
            setIndex(indexValue);
        }
        else {
            let indexValue = index - 1;

            if (index - 1 < 0) {
                indexValue = projects.length - 1;
            }
            console.log('indexvalue: ' + indexValue);
            setIndex(indexValue);
        }
    }

    const getPrevious = (): ProjectTemplate => {
        if (index - 1 < 0) {
            return projects[projects.length - 1];
        }
        return projects[index - 1];
    }

    const getNext = (): ProjectTemplate => {
        if (index + 1 > projects.length - 1) {
            return projects[0];
        }
        return projects[index + 1];
    }

    return (
        <HStack justifyContent={'space-between'}>
            {/* left box */}
            <Box 
                key={"asdf"}
                opacity={"60%"}
                marginX={"5px"}
                borderWidth="1px" 
                borderRadius="lg" 
                bgColor={colorMode === "light" ? "gray.300" : "gray.800"}
                width={"23vw"} 
                height={"100%"}>
                <Image src={getPrevious().image} alt={getPrevious().name} width={'100%'} height={'100%'} />
                <Box p={6}>
                    <Heading fontSize="xl">...</Heading>
                </Box>
            </Box>

            <Button 
                overflow={"hidden"}
                _hover={{ 
                    "transform": "scale(1.25)", 
                    "color": `${colorMode === "light" ? "blue.600" : "purple.900"}`,
                    "bgColor": `${colorMode === "light" ? "gray.300" : "purple.200"}`,
                    "transition": "0.5s ease-out"
                }} 
                _active={{ 
                    "transform": "scale(0.95)",
                }}
                fontSize={"30px"} 
                onClick={() => changeIndex('sub')}>
                {'<'}
            </Button>

            {/* middle selected box */}
            <Box 
                key={projects[index].name} 
                borderWidth="1px" 
                borderRadius="lg" 
                bgColor={colorMode === "light" ? "gray.300" : "gray.800"}
                width={"44vw"} 
                height={"100%"}
                marginX={"5px"}
                _hover={{ 
                    "transform": "scale(1.05)",
                    "transition": "transform 0.5s ease-out",
                    "cursor": "pointer"
                }}
                sx={{
                    "transition": "transform 1s ease-in-out"
                }}>
                <Image src={projects[index].image} alt={projects[index].name} width={'100%'} height={'100%'} />
                <Box p={6}>
                    <Heading fontSize="xl">{projects[index].name}</Heading>
                    <Text mt={4}>{projects[index].description}</Text>
                </Box>
            </Box>

            <Button 
                overflow={"hidden"}
                _hover={{ 
                    "transform": "scale(1.25)", 
                    "color": `${colorMode === "light" ? "blue.600" : "purple.900"}`,
                    "bgColor": `${colorMode === "light" ? "gray.300" : "purple.200"}`,
                    "transition": "0.5s ease-out"
                }} 
                _active={{ 
                    "transform": "scale(0.95)",
                }}
                fontSize={"30px"} 
                onClick={() => changeIndex('add')}>
                {'>'}
            </Button>

            {/* right box */}
            <Box 
                key={"fdsa"} 
                opacity={"60%"}
                marginX={"5px"}
                bgColor={colorMode === "light" ? "gray.300" : "gray.800"}
                borderWidth="1px" 
                borderRadius="lg" 
                width={"23vw"} 
                height={"100%"}>
                <Image src={getNext().image} alt={getNext().name} width={'100%'} height={'100%'} />
                <Box p={6}>
                    <Heading fontSize="xl">...</Heading>
                </Box>
            </Box>
        </HStack>
    );
}

export default ProjectsList;