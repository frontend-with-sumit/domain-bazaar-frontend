import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
	return (
		<HStack>
			<Input
				borderColor="gray.200"
				borderWidth="2px"
				borderRadius="md"
				width="100%"
				size="md"
				boxShadow="inset"
				placeholder="Search for a domain name...."
				_placeholder={{ color: 'gray.600', fontSize: 'xs' }}
			/>
			<Button background="black" color="white" borderRadius="md">
				<BiSearch /> Search
			</Button>
		</HStack>
	);
};

export default Search;
