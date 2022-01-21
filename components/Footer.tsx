import {
    Box,
    Text,
    ButtonGroup,
    IconButton,
    Stack,
    StackDivider,
    useColorModeValue,
} from "@chakra-ui/react";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaDiscord} from "@react-icons/all-files/fa/FaDiscord";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaReddit} from "@react-icons/all-files/fa/FaReddit";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {useTranslation} from "next-i18next";

export default function Footer() {
        const { t } = useTranslation('footer');
    const footerBackground = useColorModeValue("gray.100", "gray.900");

    return <Box as="footer" role="contentinfo" pos="absolute" bottom="0" w="100%" bg={footerBackground} p={3} py="12">
        <Stack spacing="10" divider={<StackDivider />}>
            <Stack
                direction={{ base: 'column-reverse', md: 'row' }}
                justifyContent="space-between"
                alignItems="center"
            >
                <Text fontSize="sm">&copy; {new Date().getFullYear()} TriForMine. {t('rights')}</Text>
                <ButtonGroup variant="ghost" color="gray.600">
                    <IconButton target="_blank" rel="noreferrer" as="a" href="https://www.github.com/triformine" aria-label="Github" icon={<FaGithub fontSize="20px" />}/>
                    <IconButton target="_blank" rel="noreferrer" as="a" href="https://www.twitter.com/triformine" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />}/>
                    <IconButton target="_blank" rel="noreferrer" as="a" href="https://www.instagram.com/triformine" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />}/>
                    <IconButton target="_blank" rel="noreferrer" as="a" href="https://www.reddit.com/u/triformine" aria-label="Reddit" icon={<FaReddit fontSize="20px" />}/>
                    <IconButton target="_blank" rel="noreferrer" as="a" href="https://discordapp.com/users/140909429993373697" aria-label="Discord" icon={<FaDiscord fontSize="20px" />}/>
                </ButtonGroup>
            </Stack>
        </Stack>
    </Box>
}
