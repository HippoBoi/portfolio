import { Box, Heading, Image, useColorMode } from '@chakra-ui/react';
import { ProjectTemplate } from '../ProjectsList';
import { useEffect, useState } from 'react';

interface Props {
    slideDirection: string;
    project: ProjectTemplate;
    orientation: "left" | "right";
}

const SliderBox = ({ slideDirection, project, orientation }: Props) => {
    const { colorMode } = useColorMode();
    const [overrideAnim, setOverrideAnim] = useState(false);

    useEffect(() => {
        if (orientation === slideDirection) {
            setTimeout(() => setOverrideAnim(true), 100);
            setTimeout(() => setOverrideAnim(false), 600);
        }
    }), [slideDirection];
    
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
                    overrideAnim ? 
                    "showFromRight"
                    :
                        slideDirection === "right" ? 
                        "boxLeft" 
                        : slideDirection === "left" ? 
                        "hideRight" : ""
                :
                    overrideAnim ? 
                    "showFromLeft"
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
