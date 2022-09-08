import {createStyles, Container, Group, ActionIcon, Title, Footer} from '@mantine/core';
import {
	IconBrandTwitter,
	IconBrandInstagram,
	IconBrandGithub,
	IconBrandReddit,
	IconBrandDiscord
} from '@tabler/icons';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	inner: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			marginTop: theme.spacing.md,
		},
	},
}));

export default function CustomFooter() {
	const { classes } = useStyles();

	return (
		<Footer height={80} className={classes.footer}>
			<Container className={classes.inner}>
				<Group spacing={0} className={classes.links} position="center" noWrap>
					<Link href="https://github.com/triformine" target="_blank" passHref>
						<ActionIcon target="_blank" component="a" size="lg">
							<IconBrandGithub size={18} stroke={1.5} />
						</ActionIcon>
					</Link>
					<Link href="https://www.twitter.com/triformine" passHref>
						<ActionIcon target="_blank" component="a" size="lg">
							<IconBrandTwitter size={18} stroke={1.5} />
						</ActionIcon>
					</Link>
					<Link href="https://www.twitter.com/triformine" passHref>
						<ActionIcon target="_blank" component="a" size="lg">
							<IconBrandInstagram size={18} stroke={1.5} />
						</ActionIcon>
					</Link>
					<Link href="https://www.reddit.com/u/triformine" passHref>
						<ActionIcon target="_blank" component="a" size="lg">
							<IconBrandReddit size={18} stroke={1.5} />
						</ActionIcon>
					</Link>
					<Link href="https://discordapp.com/users/140909429993373697" passHref>
						<ActionIcon target="_blank"component="a" size="lg">
							<IconBrandDiscord size={18} stroke={1.5} />
						</ActionIcon>
					</Link>
				</Group>
			</Container>
		</Footer>
	);
}
