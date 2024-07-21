import { Box, Heading, Image, Text, HStack, Button, useColorMode, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import "./ProjectsList.css";
import SliderBox from './Slider/SliderBox';
import SliderButton from './Slider/SliderButton';

export interface ProjectTemplate {
    name: string;
    description: string;
    image: string;
    link?: string;
}

interface Props {
    projects: ProjectTemplate[];
}

const ProjectsList = ({ projects }: Props) => {
    const [index, setIndex] = useState(1);
    const [slideDirection, setSlideDirection] = useState("");
    const [disableButton, setDisableButton] = useState(false);
    const { colorMode } = useColorMode();

    const animDuration = 620;

    const changeIndex = (action: 'add' | 'sub') => {
        if (disableButton) return;

        setDisableButton(true);

        setTimeout(() => {
            setDisableButton(false);
        }, animDuration);

        if (action === 'add') {
            setSlideDirection("right");

            let indexValue = index + 1;

            if (index + 1 > projects.length - 1) {
                indexValue = 0;
            }

            setIndex(indexValue);
        }
        else {
            setSlideDirection("left");

            let indexValue = index - 1;

            if (index - 1 < 0) {
                indexValue = projects.length - 1;
            }

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
            <SliderBox slideDirection={slideDirection} project={getPrevious()} orientation='left' />

            <SliderButton action='sub' onClick={(action: "add" | "sub") => changeIndex(action)} disabled={disableButton} />

            {/* middle selected box */}
            <Box 
                key={projects[index].name}
                borderWidth="1px" 
                borderRadius="lg" 
                bgColor={colorMode === "light" ? "gray.300" : "gray.900"}
                className={slideDirection}
                onAnimationEnd={() => setSlideDirection("")}
                width={"44vw"} 
                height={"68vh"}
                marginX={"5px"}
                zIndex={2}
                onClick={() => {
                    window.open(projects[index].link, "_blank");
                }}
                _hover={{ 
                    "transform": `${disableButton ? "scale(1.0)" : "scale(1.05)"}`,
                    "transition": "transform 0.5s ease-out",
                    "cursor": "pointer"
                }}
                sx={{ 
                    "transition": "transform 1s ease-in-out"
                }}>
                <Image src={projects[index].image} alt={projects[index].name} width={'44vw'} height={'45vh'} />
                <Box p={6}>
                    <Heading fontSize="xl">{projects[index].name}</Heading>
                    <Text mt={4}>{projects[index].description}</Text>
                </Box>
            </Box>

            <SliderButton action='add' onClick={(action: "add" | "sub") => changeIndex(action)} disabled={disableButton} />

            {/* right box */}
            <SliderBox slideDirection={slideDirection} project={getNext()} orientation='right' />
        </HStack>
    );
}

export default ProjectsList;