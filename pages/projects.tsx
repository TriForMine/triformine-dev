import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextPage} from "next";
import {LinkBox, LinkOverlay, Center, Heading, Image, SimpleGrid, VStack} from "@chakra-ui/react";
import {useTranslation} from "next-i18next";
import NextLink from "next/link";
import {NextSeo} from "next-seo";

const Project = ({name, image, link}: {name: string, image: string, link: string }) => {
    return <LinkBox _hover={{boxShadow: "dark-lg"}} boxShadow="2xl" rounded="md" p={6} width="100%">
        <Center>
            <Image src={image} alt={name} objectFit="cover" rounded="md"/>
        </Center>
        <Center>
            <NextLink href={link} passHref>
                <LinkOverlay isExternal>
                    <Heading my={3} size="lg" as="h3">{name}</Heading>
                </LinkOverlay>
            </NextLink>
        </Center>
    </LinkBox>
}

const Projects: NextPage = () => {
    const { t } = useTranslation('projects');

    return <>
        <NextSeo
            title={t('title')}
            description={t('description')}
        />
        <VStack>
            <Center>
                <Heading as="h2">
                    {t('projects')}
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

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...await serverSideTranslations(locale, ['projects', 'footer', 'navbar']),
    },
})

export default Projects
