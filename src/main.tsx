import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import colorTheme from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={colorTheme}>
            <ColorModeScript initialColorMode={colorTheme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);