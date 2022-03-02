import {Stack, Typography, SvgIcon, List, ListItem, Link} from "@mui/material";
import {FiSend} from "@react-icons/all-files/fi/FiSend";
import {json, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {i18n} from "~/i18n.server";
import LinkIcon from '@mui/icons-material/Link';

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
        <Stack pt={12} width="100%">
            <Typography textAlign="center" component={"h1"} variant="h3"><SvgIcon component={FiSend}/>{i18n.contact.header}</Typography>
            <Typography textAlign="center">Keybase: <Link color="inherit" underline="hover" href="https://keybase.io/triformine">https://keybase.io/triformine <LinkIcon /></Link></Typography>
            <Typography textAlign="center">Discord: <Link color="inherit" underline="hover" href="https://discordapp.com/users/140909429993373697">TriForMine#8592 <LinkIcon /></Link></Typography>
            <Typography textAlign="center">Email: <Link color="inherit" underline="hover" href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118;">&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118; <LinkIcon /></Link></Typography>
        </Stack>
    </>
}
