import {Button, useTheme} from '@mui/material'
import {FaLanguage} from "@react-icons/all-files/fa/FaLanguage";
import {Link, useMatches, useParams} from "remix";

export const LanguageSwitch = (props: any) => {
    const theme = useTheme();
    const { locale } = useParams();
    if(!locale)
        return <></>
    const matches = useMatches();

    return (
        <Link
            to={matches[1]?.pathname.replace(locale, locale === 'en' ? 'fr' : 'en')}
        >
            <Button sx={{color: theme.palette.text.primary}} {...props} variant="text" aria-label="Change Language" startIcon={<FaLanguage />}>{locale!.toUpperCase()}</Button>
        </Link>
    )
}
