import {Stack, Typography, SvgIcon, List, ListItem, Link} from "@mui/material";
import {FiSend} from "@react-icons/all-files/fi/FiSend";
import {json, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {i18next} from "~/i18n.server";
import LinkIcon from '@mui/icons-material/Link';
import {useTranslation} from "react-i18next";

export let loader: LoaderFunction = async ({ request }) => {
    const lng = request.url.split("/")[3];
    const t = await i18next.getFixedT(lng, ['contact', 'footer', 'navbar']);

    return json({
        title: t('title'),
        description: t('description'),
        header: t('header')
    });
};

export const meta: MetaFunction = ({data}) => {
    return {
        title: data.title + ' - TriForMine',
        description: data.description
    }
};

export default function Contact() {
    const data = useLoaderData();

    return <>
        <Stack pt={12} width="100%">
            <Typography textAlign="center" component={"h1"} variant="h3"><SvgIcon component={FiSend}/>{data.header}</Typography>
            <Typography textAlign="center">Keybase: <Link color="inherit" underline="hover" href="https://keybase.io/triformine">https://keybase.io/triformine <LinkIcon /></Link></Typography>
            <Typography textAlign="center">Discord: <Link color="inherit" underline="hover" href="https://discordapp.com/users/140909429993373697">TriForMine#8592 <LinkIcon /></Link></Typography>
            <Typography textAlign="center">Email: <Link color="inherit" underline="hover" href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118;">&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#116;&#114;&#105;&#102;&#111;&#114;&#109;&#105;&#110;&#101;&#046;&#100;&#101;&#118; <LinkIcon /></Link></Typography>
        </Stack>
    </>
}
