"use client"

import { Link } from "@chakra-ui/next-js"
import { Box, Button, Flex, Heading, Stack, Text, useBreakpointValue, useColorModeValue, Icon, Container } from "@chakra-ui/react"
import { ReactElement } from "react";
import { motion } from 'framer-motion'

import {
    SiTypescript,
    SiJavascript,
    SiRust,
    SiPython,
    SiLinux,
    SiPostgresql,
    SiReact,
    SiNextdotjs,
    SiLua,
    SiCplusplus,
    SiDiscord,
} from 'react-icons/si';

import {
    SlArrowDown
} from 'react-icons/sl';

interface CardProps {
    heading: string;
    description?: string;
    icon: ReactElement;
    href: string;
}

const Card = ({ heading, icon, href, description }: CardProps) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'center'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    {
                        description && <Text mt={1} fontSize={'sm'}>
                            {description}
                        </Text>
                    }
                </Box>
                <Link as={Button} href={href} target='_blank' variant={'link'} colorScheme={'blue'} size={'sm'}>
                    Learn more
                </Link>
            </Stack>
        </Box>
    );
};

export default function Page() {
  return (
      <Box textAlign="center" fontSize="xl">
          <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
              <Flex p={8} flex={1} align={'center'} justify={'center'}>
                  <Stack spacing={6} w={'full'} maxW={'lg'}>
                      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                          <Text
                              as={'span'}
                              position={'relative'}
                              _after={{
                                  content: "''",
                                  width: 'full',
                                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                                  position: 'absolute',
                                  bottom: 1,
                                  left: 0,
                                  bg: 'blue.400',
                                  zIndex: -1,
                              }}>
                              Freelance Developer
                          </Text>
                          <br />{' '}
                          <Text color={'blue.400'} as={'span'}>
                              TriForMine
                          </Text>{' '}
                      </Heading>
                      <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                          I&apos;m a freelance developer currently working on a few projects. I&apos;m also a student at the Université Cote D&apos;Azur. I&apos;m currently studying computer science and mathematics.
                      </Text>
                      {
                          // arrow that goes to the next section
                          // animated with framer-motion
                      }
                      <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: 10 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 1,
                        }}
                      >
                        <Stack pt={8} direction={{ base: 'column', md: 'row' }} align='center' justify='center' spacing={4} >
                            <Icon as={SlArrowDown} w={10} h={10} _hover={{
                                cursor: 'pointer',
                            }} onClick={() => {
                                document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
                            }} />
                        </Stack>
                      </motion.div>
                  </Stack>
              </Flex>
          </Stack>
          <Box p={4} id={'technologies'}>
              <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                  <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                      Most Used Technologies
                  </Heading>
                  <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                      These are the technologies I use the most. I&apos;m always learning new things and I&apos;m always open to learning new technologies.
                  </Text>
              </Stack>

              <Container maxW={'5xl'} mt={12}>
                  <Flex flexWrap="wrap" gridGap={6} justify="center">
                      <Card
                          heading={'Rust'}
                          icon={<Icon as={SiRust} w={10} h={10} />}
                          href={'https://www.rust-lang.org/'}
                      />
                      <Card
                        heading={'Typescript'}
                        icon={<Icon as={SiTypescript} w={10} h={10} />}
                        href={'https://www.typescriptlang.org/'}
                      />
                      <Card
                        heading={'Javascript'}
                        icon={<Icon as={SiJavascript} w={10} h={10} />}
                        href={'https://www.javascript.com/'}
                      />
                      <Card
                        heading={'Python'}
                        icon={<Icon as={SiPython} w={10} h={10} />}
                        href={'https://www.python.org/'}
                        />
                        <Card
                            heading={'Linux'}
                            icon={<Icon as={SiLinux} w={10} h={10} />}
                            href={'https://www.linux.org/'}
                        />
                        <Card
                            heading={'PostgreSQL'}
                            icon={<Icon as={SiPostgresql} w={10} h={10} />}
                            href={'https://www.postgresql.org/'}
                        />
                        <Card
                            heading={'React'}
                            icon={<Icon as={SiReact} w={10} h={10} />}
                            href={'https://reactjs.org/'}
                        />
                        <Card
                            heading={'Next.js'}
                            icon={<Icon as={SiNextdotjs} w={10} h={10} />}
                            href={'https://nextjs.org/'}
                        />
                        <Card
                            heading={'Lua'}
                            icon={<Icon as={SiLua} w={10} h={10} />}
                            href={'https://www.lua.org/'}
                        />
                        <Card
                            heading={'C++'}
                            icon={<Icon as={SiCplusplus} w={10} h={10} />}
                            href={'https://www.cplusplus.com/'}
                        />

                  </Flex>
              </Container>
          </Box>
          <Box p={4} pt={16} id={'projects'}>
              <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                  <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                      My Projects
                  </Heading>
                  <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                        These are some of the projects I&apos;ve worked on. I&apos;m always working on new projects and I&apos;m always open to new ideas.
                  </Text>
              </Stack>

              <Container maxW={'5xl'} mt={12}>
                  <Flex flexWrap="wrap" gridGap={6} justify="center">
                        <Card
                            heading={'Isekai Maid'}
                            description={'A Discord Bot, with more than 48,000 characters to collect from animes, mangas, gacha games and even vtubers!\n' +
                                'The bot get frequent updates, and have a lot of planned features.'}
                            icon={<Icon as={SiDiscord} w={10} h={10} />}
                            href={'https://www.isekaimaid.com/'}
                            />
                  </Flex>
              </Container>
          </Box>

      </Box>
  )
}
