import {Button, useTheme} from '@mui/material'
import {FaLanguage} from "@react-icons/all-files/fa/FaLanguage";
import {useMatches, useNavigate, useParams} from "remix";

export const LanguageSwitch = (props: any) => {
    let navigate = useNavigate();
    const theme = useTheme();
    const { locale } = useParams();
    if(!locale)
        return <></>
    const matches = useMatches();

    return (
            <Button onClick={() => {
                navigate(matches[1]?.pathname.replace(locale, locale === 'en' ? 'fr' : 'en'), { replace: true });
            }} sx={{color: theme.palette.text.primary}} {...props} variant="text" aria-label="Change Language" startIcon={<FaLanguage />}>{locale!.toUpperCase()}</Button>
    )
}
