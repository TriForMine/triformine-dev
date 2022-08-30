import {json, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {Box, Grid, Link, Stack, Typography} from "@mui/material";
import {i18next} from "~/i18n.server";
import {useTranslation} from "react-i18next";

const Project = ({name, image, link}: {name: string, image: string, link: string }) => {
    return <Grid item xs={12} md={6} xl={4}>
        <Link href={link} target="_blank">
            <Box sx={{boxShadow: 3, borderRadius: 2}} p={6} width="100%">
                <Box sx={{textAlign: 'center'}}>
                    <img width='100%' src={image} alt={name} />
                </Box>
                <Box sx={{textAlign: 'center'}}>
                    <Typography my={3} variant="h4" component="h3">{name}</Typography>
                </Box>
            </Box>
        </Link>
    </Grid>
}

export let loader: LoaderFunction = async ({ request }) => {
    const lng = request.url.split("/")[3];
    const t = await i18next.getFixedT(lng, ['projects', 'footer', 'navbar'])

    return json({
        title: t('title'),
        description: t('description'),
        projects: t('projects')
    });
};

export const meta: MetaFunction = ({data}) => {
    return {
        title: data.title + ' - TriForMine',
        description: data.description
    }
};

export default function Projects () {
    const data = useLoaderData();

    return <>
        <Stack pt={12}>
            <Typography textAlign="center" component="h2" variant="h3">
                {data.projects}
            </Typography>
            <Grid container pt={3} width="100%" spacing={16}>
                <Project name="Isekai Maid" link="https://www.isekaimaid.xyz/" image="/isekai-maid.png" />
                <Project name="Kwik" link="https://github.com/TriForMine/kwik" image="/deno-logo.svg" />
                <Project name="Voxel World Rust" link="https://github.com/TriForMine/voxel-world-rust" image="/rust.png" />
            </Grid>
        </Stack>
    </>
}
