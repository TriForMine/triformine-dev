"use client"

import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';
import { ReactNode } from 'react';
import { Link } from '@chakra-ui/next-js';

const SocialButton = ({
						  children,
						  label,
						  href,
					  }: {
	children: ReactNode;
	label: string;
	href: string;
}) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={Link}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			target={'_blank'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function SmallWithSocial() {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}>
				<Text>© {new Date().getFullYear()} TriForMine - All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Github'} href={'https://www.github.com/triformine'}>
						<FaGithub />
					</SocialButton>
					<SocialButton label={'Twitter'} href={'https://www.twitter.com/triformine'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={'Discord'} href={'https://discordapp.com/users/140909429993373697'}>
						<FaDiscord />
					</SocialButton>
					<SocialButton label={'Instagram'} href={'https://www.instagram.com/triformine'}>
						<FaInstagram />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}
