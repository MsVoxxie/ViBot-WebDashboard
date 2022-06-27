import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Avatar, Button, Flex, Heading } from '@chakra-ui/react';
import TextLoop from 'react-text-loop';

export function LandingComponent({ bot }) {
	const { toggleColorMode } = useColorMode();
	const formBackground = useColorModeValue('gray.200', 'gray.700');

	const login = () => (window.location.href = 'https://api.voxxie.me/api/auth/discord/');

	return (
		<Flex height='100vh' alignItems='center' justifyContent='center'>
			<Flex width='35vh' direction='column' background={formBackground} p={6} rounded={6}>
				<Flex justify='center'>
					<Avatar src={`https://cdn.discordapp.com/app-icons/${bot.id}/${bot.icon}.png`} />
					<Heading mb={6}>{bot.name}</Heading>
				</Flex>
				<Flex justify='center' mb={6} alignItems='center'>
					<Heading size='sm' mr={2}>
						With ViBot You Can:
					</Heading>
					<TextLoop>
						<Heading size='sm'>Play Music</Heading>
						<Heading size='sm'>Assign Roles</Heading>
						<Heading size='sm'>Welcome Users</Heading>
						<Heading size='sm'>Audit Changes</Heading>
						<Heading size='sm'>Have Fun</Heading>
						<Heading size='sm'>Moderate</Heading>
						<Heading size='sm'>Pridify Avatars</Heading>
					</TextLoop>
				</Flex>
				<Flex justify='center' direction='column' alignItems='center'>
					<Button mb={6} colorScheme='teal' variant='solid' onClick={login}>
						Login with Discord
					</Button>
					<Button size='xs' width='fit-content' mb={0} onClick={toggleColorMode}>
						Toggle Theme
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
