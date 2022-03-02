import {json, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {i18n} from "~/i18n.server";
import {Box, Grid, Link, Stack, Typography} from "@mui/material";

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

export let loader: LoaderFunction = async (args) => {
    if (!args.params.locale)
        throw new Error('Locale not specified.')

    return json({
        i18n: await i18n.getTranslations(args.params.locale, ['projects', 'footer', 'navbar']),
    });
};

export const meta: MetaFunction = ({data}) => {
    return {
        title: data.i18n.projects.title + ' - TriForMine',
        description: data.i18n.projects.description
    }
};

export default function Projects () {
    const { i18n } = useLoaderData();

    return <>
        <Stack pt={12}>
            <Typography textAlign="center" component="h2" variant="h3">
                {i18n.projects.projects}
            </Typography>
            <Grid container pt={3} width="100%" spacing={16}>
                <Project name="Isekai Maid" link="https://www.isekaimaid.xyz/" image="/isekai-maid.png" />
                <Project name="Kwik" link="https://github.com/TriForMine/kwik" image="/deno-logo.svg" />
                <Project name="Voxel World Rust" link="https://github.com/TriForMine/voxel-world-rust" image="/rust.png" />
            </Grid>
        </Stack>
    </>
}
