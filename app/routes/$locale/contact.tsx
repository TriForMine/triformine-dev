import {Heading, Icon, Link, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import {FiSend} from "@react-icons/all-files/fi/FiSend";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {json, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {i18n} from "~/i18n.server";

export let loader: LoaderFunction = async (args) => {
    if (!args.params.locale)
        throw new Error('Locale not specified.')

    return json({
        i18n: await i18n.getTranslations(args.params.locale, ['contact', 'footer', 'navbar']),
    });
};

export const meta: MetaFunction = ({data}) => {
    return {
        title: data.i18n.contact.title + ' - TriForMine',
        description: data.i18n.contact.description
    }
};

export default function Contact() {
    const { i18n } = useLoaderData();

    return <>
        <VStack>
            <Heading><Icon as={FiSend}/>{i18n.contact.header}</Heading>
            <UnorderedList>
                <ListItem>Keybase: <Link href="https://keybase.io/triformine" color="teal.500" isExternal>https://keybase.io/triformine <ExternalLinkIcon mx="2px" /></Link></ListItem>
                <ListItem>Discord:<Link href="https://discordapp.com/users/140909429993373697" color="teal.500" isExternal>TriForMine#8592 <ExternalLinkIcon mx="2px" /></Link></ListItem>
                <ListItem>Email: <Link href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118;" color="teal.500" isExternal>&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118; <ExternalLinkIcon mx="2px" /></Link></ListItem>
            </UnorderedList>
        </VStack>
    </>
}
