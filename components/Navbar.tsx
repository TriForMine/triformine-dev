import {
    Box,
    Flex,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import {NavbarButton} from "./NavbarButton";
import {DarkModeSwitch} from "./DarkModeSwitch";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {LanguageSwitch} from "./LanguageSwitch";

const Navbar = () => {
    const { t } = useTranslation('navbar');
    const router = useRouter();
    const [display, changeDisplay] = useState('none');
    const activeColor = useColorModeValue("gray.50", "gray.900");
    const navbarBackground = useColorModeValue("gray.100", "gray.900");

    useEffect(() => {
        changeDisplay('none')
    }, [router]);

    return <Flex>
        <Box pos="absolute" top="0" left="0" w="100%" height="56px" bg={navbarBackground}>
        </Box>
        <Flex
            pos="absolute"
            top="0"
            left="1rem"
        >
            <Flex
                align="center"
                display={['none','none','flex','flex']}
            >
                <NavbarButton ml={2} my={2} name={t('home')} href="/"/>
                <NavbarButton ml={2} my={2} name={t('projects')} href="/projects" />
                <NavbarButton ml={2} my={2} name={t('contact')}  href="/contact" />
            </Flex>
        </Flex>
        <Flex
            pos="absolute"
            top="0"
            right="1rem"
        >
            <Flex align="center">
                <IconButton my={2} onClick={() => changeDisplay('flex')} variant="ghost" display={['flex','flex','none','none']} aria-label={t('open')} size="lg" mr={2} icon={<HamburgerIcon/>}/>

                <DarkModeSwitch my={2} />
                <LanguageSwitch my={2} />
            </Flex>
        </Flex>
        <Flex
            w="100vw"
            bgColor={activeColor}
            zIndex={20}
            h="100vh"
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
            display={display}
        >
            <Flex  justify="flex-end">
                <IconButton onClick={() => changeDisplay('none')} variant="ghost" mt={2} mr={2} aria-label={t('close')} size="lg" icon={<CloseIcon />} />
            </Flex>
            <Flex
                flexDir="column"
                align="center"
                mx={2}
            >
                <NavbarButton name={t('home')} href="/"/>
                <NavbarButton name={t('projects')} href="/projects" />
                <NavbarButton name={t('contact')}  href="/contact" />
            </Flex>
        </Flex>
    </Flex>
}

export default Navbar;
