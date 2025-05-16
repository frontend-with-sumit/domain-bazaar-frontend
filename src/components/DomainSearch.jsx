import { Badge, Box, Heading, Text, VStack } from '@chakra-ui/react';
import Search from './shared/Search';

const BADGES = [
	'GoDaddy',
	'Namecheap',
	'Bluehost',
	'Hostinger',
	'Google Domains',
];

const DomainSearch = () => {
	return (
		<VStack
			as="section"
			justifyContent="center"
			alignItems="center"
			bgGradient="to-b"
			gradientFrom="white"
			gradientTo="blue.50"
			height="25rem"
			textAlign="center"
			spaceY={4}
		>
			<Heading as="h1" fontSize="2.7rem" fontWeight="bolder">
				Find Your Perfect Domain
			</Heading>
			<Text color="gray.700">
				Search, buy, and sell domains across multiple providers in one place.
			</Text>
			<Box width="35rem">
				<Search />
			</Box>
			<Box spaceX={3}>
				{BADGES.map((badge, index) => (
					<Badge
						key={index}
						paddingInline="7px"
						paddingBlock="4px"
						borderRadius="md"
						background="white"
						color="black"
						boxShadow="inset 0 0 0 1px #E2E8F0"
						fontWeight={500}
					>
						{badge}
					</Badge>
				))}
			</Box>
		</VStack>
	);
};

export default DomainSearch;
