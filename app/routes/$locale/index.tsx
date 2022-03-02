import {DiPhp} from "@react-icons/all-files/di/DiPhp";
import {IconType} from "@react-icons/all-files";
import {DiHtml5} from "@react-icons/all-files/di/DiHtml5";
import {DiJavascript1} from "@react-icons/all-files/di/DiJavascript1";
import {DiPython} from "@react-icons/all-files/di/DiPython";
import {DiRust} from "@react-icons/all-files/di/DiRust";
import {DiLinux} from "@react-icons/all-files/di/DiLinux";
import {DiPostgresql} from "@react-icons/all-files/di/DiPostgresql";
import {DiReact} from "@react-icons/all-files/di/DiReact";
import {DiJava} from "@react-icons/all-files/di/DiJava";
import {SiLua} from "@react-icons/all-files/si/SiLua";
import {SiCplusplus} from "@react-icons/all-files/si/SiCplusplus";
import {SiCsharp} from "@react-icons/all-files/si/SiCsharp";
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript";
import {SiIntellijidea} from "@react-icons/all-files/si/SiIntellijidea";
import {SiVisualstudio} from "@react-icons/all-files/si/SiVisualstudio";
import {SiUnity} from "@react-icons/all-files/si/SiUnity";
import {SiUnrealengine} from "@react-icons/all-files/si/SiUnrealengine";
import {SiDiscord} from "@react-icons/all-files/si/SiDiscord";
import {SiBrave} from "@react-icons/all-files/si/SiBrave";
import {i18n} from "~/i18n.server";
import {json, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {Divider, Grid, LinearProgress, Stack, SvgIcon, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function Skill({name, color, value, icon, software}: {name: string, color: "primary" | "secondary" | "info" | "error" | "success" | "warning" | "inherit", value: number, icon: IconType, software?: boolean }) {
    return <Grid item xs={12} md={6} xl={software ? 4 : 3}>
        <Box p={6} width="100%" sx={{
            boxShadow: 3,
            borderRadius: 4,
            '&:hover': {
                opacity: [0.9, 0.8, 0.7],
            },
        }}>
            <Typography variant="h4" component="h3"><SvgIcon inheritViewBox fontSize='large' component={icon}/> {name}</Typography>
            <LinearProgress variant="determinate" color={color} value={value} />
        </Box>
    </Grid>
}

export let loader: LoaderFunction = async (args) => {
    if (!args.params.locale)
        throw 'Locale not specified.'

    return json({
        i18n: await i18n.getTranslations(args.params.locale, ['home', 'footer', 'navbar']),
    });
};

export const meta: MetaFunction = () => ({
    title: "TriForMine",
});

export default function Home() {
    const { i18n } = useLoaderData();

    return (
        <Stack >
            <Box p={5} pt={12}>
                <Typography textAlign="center" variant="h2" component="h2">
                    TriForMine
                </Typography>
                <Typography textAlign="center" mt={5}>{i18n.home.introduction}</Typography>
            </Box>
            <Divider  />
            <Stack width="100%" spacing={16}>
                <Stack width="100%" alignItems="center" justifyContent="center">
                    <Typography pb={3} variant="h2" component="h2">
                        {i18n.home.skills}
                    </Typography>
                    <Grid container width="100%" spacing={3}>
                        <Skill icon={DiHtml5} name="HTML" color="success" value={95} />
                        <Skill icon={DiJavascript1} name="JavaScript" color="success" value={95} />
                        <Skill icon={DiPhp} name="PHP" color="primary" value={75} />
                        <Skill icon={SiTypescript} name="TypeScript" color="success" value={90} />
                        <Skill icon={DiPython} name="Python" color="primary" value={75} />
                        <Skill icon={DiRust} name="Rust" color="warning" value={65} />
                        <Skill icon={DiLinux} name="Linux" color="success" value={80} />
                        <Skill icon={DiPostgresql} name="PostgreSQL" color="success" value={80} />
                        <Skill icon={DiReact} name="React" color="success" value={82} />
                        <Skill icon={SiLua} name="Lua" color="primary" value={75} />
                        <Skill icon={SiCplusplus} name="C++" color="info" value={50} />
                        <Skill icon={SiCsharp} name="C#" color="info" value={50} />
                        <Skill icon={DiJava} name="Java" color="error" value={25} />
                    </Grid>
                </Stack>
                <Stack width="100%" alignItems="center" justifyContent="center">
                    <Typography pb={3} variant="h2" component="h2">
                        {i18n.home.software}
                    </Typography>
                    <Grid container width="100%" spacing={3}>
                        <Skill name="Intellij IDEA Ultimate" icon={SiIntellijidea} color="success" value={100} software />
                        <Skill name="VSCode" icon={SiVisualstudio} color="success" value={85} software />
                        <Skill name="Unity 3D" icon={SiUnity} color="info" value={65} software />
                        <Skill name="Unreal Engine" icon={SiUnrealengine} color="info" value={65} software />
                        <Skill name="Discord" icon={SiDiscord} color="success" value={100} software />
                        <Skill name="Brave" icon={SiBrave} color="success" value={100} software />
                    </Grid>
                </Stack>
            </Stack>
        </Stack>
    )
}
