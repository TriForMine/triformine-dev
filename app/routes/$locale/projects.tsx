import {LinkBox, Link, LinkOverlay, Center, Heading, Image, SimpleGrid, VStack} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {json, LoaderFunction, MetaFunction, useLoaderData} from "remix";
import {i18n} from "~/i18n.server";

const Project = ({name, image, link}: {name: string, image: string, link: string }) => {
    return <LinkBox _hover={{boxShadow: "dark-lg"}} boxShadow="2xl" rounded="md" p={6} width="100%">
        <Center>
            <Image src={image} alt={name} objectFit="cover" rounded="md"/>
        </Center>
        <Center>
                <LinkOverlay href={link} isExternal>
                    <Heading my={3} size="lg" as="h3">{name}</Heading>
                </LinkOverlay>
        </Center>
    </LinkBox>
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
        <VStack>
            <Center>
                <Heading as="h2">
                    {i18n.projects.projects}
                </Heading>
            </Center>
            <SimpleGrid px={4} py={3} columns={[1,2,3,4]} width="100%" spacing={16}>
                <Project name="Isekai Maid" link="https://www.isekaimaid.xyz/" image="/isekai-maid.png" />
                <Project name="Kwik" link="https://github.com/TriForMine/kwik" image="/deno-logo.svg" />
                <Project name="Voxel World Rust" link="https://github.com/TriForMine/voxel-world-rust" image="/rust.png" />
            </SimpleGrid>
        </VStack>
    </>
}
