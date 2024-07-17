import { Box, Heading, Image, useColorMode } from '@chakra-ui/react';
import { ProjectTemplate } from '../ProjectsList';

interface Props {
    slideDirection: string;
    project: ProjectTemplate;
    orientation: "left" | "right";
}

const SliderBox = ({ slideDirection, project, orientation }: Props) => {
    const { colorMode } = useColorMode();
    
    return (
        <Box 
            key={"asdf"}
            opacity={"60%"}
            marginX={"5px"}
            borderWidth="1px" 
            borderRadius="lg" 
            className={
                orientation === "left" 
                ? 
                    slideDirection === "right" ? 
                    "boxLeft" 
                    : slideDirection === "left" ? 
                    "hideRight" : ""
                :
                    slideDirection === "left" ? 
                    "boxRight" 
                    : slideDirection === "right" ? 
                    "hideLeft" : ""
            }
            bgColor={colorMode === "light" ? "gray.300" : "gray.800"}
            width={"23vw"} 
            zIndex={1}
            height={"100%"}>
            <Image src={project.image} alt={project.name} width={'100%'} height={'100%'} />
            <Box p={6}>
                <Heading fontSize="xl">...</Heading>
            </Box>
        </Box>
    );
}

export default SliderBox;
