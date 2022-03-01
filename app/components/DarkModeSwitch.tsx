import {useColorMode, IconButton} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const DarkModeSwitch = (props: any) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    return (
        <IconButton {...props} variant="ghost" aria-label="Toggle Dark Mode" icon={isDark ? <SunIcon />: <MoonIcon />} onClick={toggleColorMode} />
    )
}
