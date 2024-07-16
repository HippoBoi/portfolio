import { Box, Heading, Image, Text, HStack, Button } from '@chakra-ui/react';
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
            return projects[index + 1];
        }
        return projects[index - 1];
    }

    const getNext = (): ProjectTemplate => {
        if (index + 1 > projects.length - 1) {
            return projects[index - 1];
        }
        return projects[index + 1];
    }

    return (
        <HStack justifyContent={'space-between'}>
            <Button fontSize={"30px"} onClick={() => changeIndex('sub')}>{'<'}</Button>

            {/* middle selected box */}
            <Box 
                key={projects[index].name} 
                borderWidth="1px" 
                borderRadius="lg" 
                width={"45vw"} 
                height={"100%"}>
                <Image src={projects[index].image} alt={projects[index].name} width={'100%'} height={'100%'} />
                <Box p={6}>
                    <Heading fontSize="xl">{projects[index].name}</Heading>
                    <Text mt={4}>{projects[index].description}</Text>
                </Box>
            </Box>

            <Button fontSize={"30px"} onClick={() => changeIndex('add')}>{'>'}</Button>
        </HStack>

        /*
        <HStack spacing={8}>
            {projects.map((project, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width={"45vw"} height={"100%"}>
                    <Image src={project.image} alt={project.name} />
                    <Box p={6}>
                        <Heading fontSize="xl">{project.name}</Heading>
                        <Text mt={4}>{project.description}</Text>
                    </Box>
                </Box>
            ))}
        </HStack>
        */
    );
}

export default ProjectsList;