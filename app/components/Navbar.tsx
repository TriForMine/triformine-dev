import {NavbarButton} from "./NavbarButton";
import {DarkModeSwitch} from "./DarkModeSwitch";
import {useEffect, useState} from "react";
import {LanguageSwitch} from "./LanguageSwitch";
import {useTranslation} from "react-i18next";
import {useLocation} from "remix";
import {AppBar, IconButton, Toolbar, Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    let location = useLocation();
    const theme = useTheme();

    const { t } = useTranslation('navbar');
    const [display, changeDisplay] = useState('none');
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        changeDisplay('none')
    }, [location]);

    return <AppBar>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Box sx={{display: isMobile ? 'none' : 'flex'}} component={"nav"}>
                <NavbarButton name={t('home')} href="/"/>
                <NavbarButton name={t('projects')} href="/projects" />
                <NavbarButton name={t('contact')}  href="/contact" />
            </Box>
            <Box
                position="absolute"
                top="10px"
                right="2rem"
                alignItems={"center"}
            >
                <IconButton my="auto" sx={{display: isMobile ? 'inline-block' : 'none'}} onClick={() => changeDisplay('flex')} aria-label={t('open')}><MenuIcon/></IconButton>

                <DarkModeSwitch my="auto" />
                <LanguageSwitch my="auto" />
            </Box>
            <Stack
                sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: 'black',
                    zIndex: 20,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    overflowY: 'auto',
                    display,
                    px: 6
                }}
                direction="column"
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <IconButton onClick={() => changeDisplay('none')} aria-label={t('close')}><CloseIcon /></IconButton>
                </Box>
                <NavbarButton name={t('home')} href="/"/>
                <NavbarButton name={t('projects')} href="/projects" />
                <NavbarButton name={t('contact')}  href="/contact" />
            </Stack>
        </Toolbar>
    </AppBar>
}

export default Navbar;
