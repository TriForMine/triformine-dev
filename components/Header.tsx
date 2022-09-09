import {
    createStyles,
    Header,
    Group,
    Container,
    Burger,
    Transition,
    Paper,
    Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 3,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        zIndex: 3,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
            }).color,
        },
    },
}))

interface HeaderMiddleProps {
    links: { link: string; label: string }[]
}

export default function MyHeader({ links }: HeaderMiddleProps) {
    const { asPath } = useRouter()
    const [opened, { toggle }] = useDisclosure(false)
    const { classes, cx } = useStyles()

    const items = links.map((link) => (
        <Link key={link.label} href={link.link} passHref>
            <a
                className={cx(classes.link, {
                    [classes.linkActive]: asPath === link.link,
                })}
            >
                {link.label}
            </a>
        </Link>
    ))

    return (
        <Header height={HEADER_HEIGHT}>
            <Container className={classes.header}>
                <Title order={2}>TriForMine</Title>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                />

                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Paper
                            className={classes.dropdown}
                            withBorder
                            style={styles}
                        >
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    )
}
