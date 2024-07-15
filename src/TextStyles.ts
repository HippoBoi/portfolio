import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    textStyles: {
        important: {
            fontSize: "50px",
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        subtext: {
            fontSize: "40px",
            fontWeight: 'bold',
            letterSpacing: '-2%',
        }
    }
});

export default theme;