import {
	Button,
	Flex,
	Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

const Navigation = () => {
	const isAuthenticated = true;

	return (
		<Flex alignItems="center" gap={6}>
			<Link to="/dashboard">
				<Text fontSize="sm" fontWeight="500" letterSpacing="wide">
					Home
				</Text>
			</Link>
			<Link to="/marketplace">
				<Text fontSize="sm" fontWeight="500" letterSpacing="wide">
					Marketplace
				</Text>
			</Link>
			<Link to="/sell-domain">
				<Text fontSize="sm" fontWeight="500" letterSpacing="wide">
					Sell Domain
				</Text>
			</Link>
			{isAuthenticated ? (
				<Link to="/profile">
					<UserProfile />
				</Link>
			) : (
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
			)}
		</Flex>
	);
};

export default Navigation;
