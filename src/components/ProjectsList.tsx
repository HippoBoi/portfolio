import { Stack, Box, Heading, Image, Text } from '@chakra-ui/react';

export interface ProjectTemplate {
    name: string;
    description: string;
    image: string;
}

interface Props {
    projects: ProjectTemplate[];
}

const ProjectsList = ({ projects }: Props) => {
    return (
        <Stack spacing={8}>
            {projects.map((project, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width={"45vw"} height={"100%"}>
                    <Image src={project.image} alt={project.name} />
                    <Box p={6}>
                        <Heading fontSize="xl">{project.name}</Heading>
                        <Text mt={4}>{project.description}</Text>
                    </Box>
                </Box>
            ))}
        </Stack>
    );
}

export default ProjectsList;