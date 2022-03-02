import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaDiscord} from "@react-icons/all-files/fa/FaDiscord";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaReddit} from "@react-icons/all-files/fa/FaReddit";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import {ButtonGroup, Grid, IconButton, Typography} from "@mui/material";
import Container from "@mui/material/Container";

export default function Footer() {
    const { t } = useTranslation('footer');

    return <Box sx={{
        pt: 6,
        pb: 3,
        px: 2,
        mt: 'auto',
        boxShadow: 3,
    }} component="footer" role="contentinfo">
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="space-between"
            >
                <Grid item xs={12} md={4}>
                    <Typography textAlign={"left"} fontSize="sm">&copy; {new Date().getFullYear()} TriForMine. {t('rights')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ButtonGroup variant="outlined">
                        <IconButton target="_blank" rel="noreferrer" component="a" href="https://www.github.com/triformine" aria-label="Github"><FaGithub fontSize="20px" /></IconButton>
                        <IconButton target="_blank" rel="noreferrer" component="a" href="https://www.twitter.com/triformine" aria-label="Twitter"><FaTwitter fontSize="20px" /></IconButton>
                        <IconButton target="_blank" rel="noreferrer" component="a" href="https://www.instagram.com/triformine" aria-label="Instagram"><FaInstagram fontSize="20px" /></IconButton>
                        <IconButton target="_blank" rel="noreferrer" component="a" href="https://www.reddit.com/u/triformine" aria-label="Reddit"><FaReddit fontSize="20px" /></IconButton>
                        <IconButton target="_blank" rel="noreferrer" component="a" href="https://discordapp.com/users/140909429993373697" aria-label="Discord"><FaDiscord fontSize="20px" /></IconButton>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
    </Box>
}
