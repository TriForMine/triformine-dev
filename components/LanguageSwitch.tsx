import {Button, Icon} from '@chakra-ui/react'
import {useRouter} from "next/router";
import {FaLanguage} from "@react-icons/all-files/fa/FaLanguage";
import Link from "next/link";

export const LanguageSwitch = (props: any) => {
    const router = useRouter()
    return (
        <Link
            href={router.pathname}
            locale={router.locale === 'en' ? 'fr' : 'en'}
            passHref
        >
            <Button {...props} variant="ghost" aria-label="Change Language" leftIcon={<Icon as={FaLanguage} />}>{router.locale!.toUpperCase()}</Button>
        </Link>
    )
}
