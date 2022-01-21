import type { AppProps } from 'next/app'
import {Box, ChakraProvider, Flex} from "@chakra-ui/react";
import {DefaultSeo} from "next-seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
    return <ChakraProvider>
        <DefaultSeo
            openGraph={{
                type: 'website',
                locale: 'en_US',
                site_name: 'TriForMine',
                description: "Welcome, I'm TriForMine and I'm an independant programmer. Creator of the discord bot Isekai Maid and much more!"
            }}
            twitter={{
                handle: '@TriForMine',
                site: '@TriForMine',
                cardType: 'summary',
            }}
            defaultTitle="TriForMine"
            titleTemplate="%s - TriForMine"
            languageAlternates={[{
                hrefLang: 'en',
                href: 'https://www.triformine.dev/en'
            }, {
                hrefLang: 'fr',
                href: 'https://www.triformine.dev/fr'
            }]}
            description="Welcome, I'm TriForMine and I'm an independent programmer. Creator of the discord bot Isekai Maid and much more!"
        />
        <Flex pos="relative" alignItems="center" justifyContent="center">
            <Navbar />
            <Box pt="70px" pb={["400px", "365px", "365px","365px"]} width="100vw" minHeight="100vh">
                <Component {...pageProps} />
            </Box>
            <Footer />
        </Flex>
    </ChakraProvider>
}
export default appWithTranslation(MyApp)
