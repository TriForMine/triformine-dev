import {VStack, Text, Box, Center, Heading, Divider, StackDivider, Stack, Progress, SimpleGrid, Icon} from "@chakra-ui/react";
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
import {useTranslation} from "react-i18next";

function Skill({name, color, value, icon}: {name: string, color: string, value: number, icon: IconType }) {
    return <Box _hover={{boxShadow: "dark-lg"}} boxShadow="2xl" rounded="md" p={6} width="100%">
        <Center>
            <Heading size="lg" as="h3"><Icon w={8} h={8} as={icon}/> {name}</Heading>
        </Center>
        <Progress mt={3} colorScheme={color} value={value} />
    </Box>
}

export let loader: LoaderFunction = async (args) => {
    if (!args.params.locale)
        throw new Error('Locale not specified.')

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
        <VStack>
            <Box p={5}>
                <Center>
                    <Heading as="h2">
                        TriForMine
                    </Heading>
                </Center>
                <Text textAlign="center" marginTop={5}>{i18n.home.introduction}</Text>
            </Box>
            <Divider type="dashed" />
            <VStack paddingX={3} width="100%" divider={<StackDivider />} spacing={16}>
                <Stack width="100%" alignItems="center" justifyContent="center">
                    <Heading textAlign="center" as="h2">
                        {i18n.home.skills}
                    </Heading>
                    <SimpleGrid py={3} columns={[1,2,3,4]} width="100%" spacing={16}>
                        <Skill icon={DiHtml5} name="HTML" color="green" value={95} />
                        <Skill icon={DiJavascript1} name="JavaScript" color="green" value={95} />
                        <Skill icon={DiPhp} name="PHP" color="teal" value={75} />
                        <Skill icon={SiTypescript} name="TypeScript" color="green" value={90} />
                        <Skill icon={DiPython} name="Python" color="teal" value={75} />
                        <Skill icon={DiRust} name="Rust" color="yellow" value={65} />
                        <Skill icon={DiLinux} name="Linux" color="green" value={80} />
                        <Skill icon={DiPostgresql} name="PostgreSQL" color="green" value={80} />
                        <Skill icon={DiReact} name="React/NextJS" color="green" value={82} />
                        <Skill icon={SiLua} name="Lua" color="teal" value={75} />
                        <Skill icon={SiCplusplus} name="C++" color="orange" value={50} />
                        <Skill icon={SiCsharp} name="C#" color="orange" value={50} />
                        <Skill icon={DiJava} name="Java" color="purple" value={25} />
                    </SimpleGrid>
                </Stack>
                <Stack width="100%" alignItems="center" justifyContent="center">
                    <Heading textAlign="center" as="h2">
                        {i18n.home.software}
                    </Heading>
                    <SimpleGrid py={3} columns={[1,2,3]} width="100%" spacing={16}>
                        <Skill name="Intellij IDEA Ultimate" icon={SiIntellijidea} color="green" value={100} />
                        <Skill name="VSCode" icon={SiVisualstudio} color="green" value={85} />
                        <Skill name="Unity 3D" icon={SiUnity} color="orange" value={65} />
                        <Skill name="Unreal Engine" icon={SiUnrealengine} color="orange" value={65} />
                        <Skill name="Discord" icon={SiDiscord} color="green" value={100} />
                        <Skill name="Brave" icon={SiBrave} color="green" value={100} />
                    </SimpleGrid>
                </Stack>
            </VStack>
        </VStack>
    )
}
