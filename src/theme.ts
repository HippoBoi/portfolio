import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "./fonts.css"

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false
};

const colorTheme = extendTheme({ config, fonts: {
    heading: `'raleway', sans-serif`,
    body: `'raleway', sans-serif`,
}, });

export default colorTheme;