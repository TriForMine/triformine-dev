import {Button, Icon} from '@chakra-ui/react'
import {FaLanguage} from "@react-icons/all-files/fa/FaLanguage";
import {Link, useMatches, useParams} from "remix";

export const LanguageSwitch = (props: any) => {
    const { locale } = useParams();
    if(!locale)
        return <></>
    const matches = useMatches();

    return (
        <Link
            to={matches[1]?.pathname.replace(locale, locale === 'en' ? 'fr' : 'en')}
        >
            <Button {...props} variant="ghost" aria-label="Change Language" leftIcon={<Icon as={FaLanguage} />}>{locale!.toUpperCase()}</Button>
        </Link>
    )
}
