import { createStyles, Title, Text, Button, Container } from '@mantine/core'
import { Dots } from './Dots'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: 0,
        paddingBottom: 80,

        '@media (max-width: 755px)': {
            paddingTop: 0,
            paddingBottom: 60,
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    dots: {
        position: 'absolute',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1],

        '@media (max-width: 755px)': {
            display: 'none',
        },
    },

    dotsLeft: {
        left: 0,
        top: 0,
    },

    title: {
        textAlign: 'center',
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: -1,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        marginBottom: theme.spacing.xs,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 520px)': {
            fontSize: 28,
            textAlign: 'left',
        },
    },

    description: {
        textAlign: 'center',

        '@media (max-width: 520px)': {
            textAlign: 'left',
            fontSize: theme.fontSizes.md,
        },
    },

    controls: {
        marginTop: theme.spacing.lg,
        display: 'flex',
        justifyContent: 'center',

        '@media (max-width: 520px)': {
            flexDirection: 'column',
        },
    },

    control: {
        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        '@media (max-width: 520px)': {
            height: 42,
            fontSize: theme.fontSizes.md,

            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },
}))

export default function Hero() {
    const { classes } = useStyles()

    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: -80 }} />
            <Dots className={classes.dots} style={{ left: 60, top: -80 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 60 }} />
            <Dots className={classes.dots} style={{ right: 0, top: -80 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>TriForMine</Title>

                <Container p={0} size={600}>
                    <Text
                        size="lg"
                        color="dimmed"
                        className={classes.description}
                    >
                        An independent programmer. Creator of the discord bot
                        Isekai Maid and much more!
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Link href="/projects" passHref>
                        <Button
                            component="a"
                            className={classes.control}
                            size="lg"
                            variant="default"
                            color="gray"
                        >
                            Projects
                        </Button>
                    </Link>
                    <Link href="https://github.com/triformine" passHref>
                        <Button
                            component="a"
                            target="_blank"
                            className={classes.control}
                            size="lg"
                        >
                            Github
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}
