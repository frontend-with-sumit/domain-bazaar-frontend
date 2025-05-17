import { Button, Flex, HStack, List, Text } from '@chakra-ui/react';

const Navigation = () => {
	return (
		<Flex as="nav" alignItems="center" gap={6}>
			<Text fontSize="sm" fontWeight="500" letterSpacing="wide">
				Home
			</Text>
			<Text fontSize="sm" fontWeight="500" letterSpacing="wide">
				Marketplace
			</Text>
			<Text fontSize="sm" fontWeight="500" letterSpacing="wide">
				Sell Domains
			</Text>
			<Button
				variant="outline"
				size="xs"
				color="black"
				borderColor="gray.200"
				borderWidth="2px"
				borderRadius="md"
				letterSpacing="wide"
				_hover={{
					background: 'gray.100',
				}}
			>
				Sign In
			</Button>
		</Flex>
	);
};

export default Navigation;
