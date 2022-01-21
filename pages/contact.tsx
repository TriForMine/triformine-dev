import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextPage} from "next";
import {Heading, Icon, Link, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import {FiSend} from "@react-icons/all-files/fi/FiSend";
import NextLink from "next/link";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {useTranslation} from "next-i18next";
import {NextSeo} from "next-seo";

const Contact: NextPage = () => {
    const { t } = useTranslation('contact');

    return <>
        <NextSeo
            title={t('title')}
            description={t('description')}
        />
        <VStack>
            <Heading><Icon as={FiSend}/> {t('header')}</Heading>
            <UnorderedList>
                <ListItem>Keybase: <NextLink passHref href="https://keybase.io/triformine"><Link color="teal.500" isExternal>https://keybase.io/triformine <ExternalLinkIcon mx="2px" /></Link></NextLink></ListItem>
                <ListItem>Discord: <NextLink passHref href="https://discordapp.com/users/140909429993373697"><Link color="teal.500" isExternal>TriForMine#8592 <ExternalLinkIcon mx="2px" /></Link></NextLink></ListItem>
                <ListItem>Email: <NextLink passHref href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118;"><Link color="teal.500" isExternal>&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118; <ExternalLinkIcon mx="2px" /></Link></NextLink></ListItem>
            </UnorderedList>
        </VStack>
    </>
}

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...await serverSideTranslations(locale, ['contact', 'footer', 'navbar']),
    },
})

export default Contact
