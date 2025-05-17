import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Search from './shared/Search';
import NoData from './shared/NoData';
import SearchResults from './SearchResults';

const DomainSearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults] = useState([]);

	const checkAvailability = (query) => {
		// TODO: Based on the user input make a debounced API call to check domain availability
	};

	return (
		<Box as="section">
			<Box
				padding={6}
				className="shadow-xs rounded-xl border-1! border-gray-200!"
			>
				<Search value={searchTerm} onChange={(val) => setSearchTerm(val)} />
			</Box>
			<Box>{searchResults.length ? <NoData /> : <SearchResults />}</Box>
		</Box>
	);
};

export default DomainSearchForm;
