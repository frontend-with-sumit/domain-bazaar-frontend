import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Search from './shared/Search';
import NoData from './shared/NoData';
import SearchResults from './SearchResults';

const domain = 'example';

const BASE_RESULTS = [
	{
		id: 1,
		name: `${domain}.com`,
		available: Math.random() > 0.5,
		price: Math.floor(Math.random() * 50) + 10,
		provider: 'GoDaddy',
	},
	{
		id: 2,
		name: `${domain}.net`,
		available: Math.random() > 0.3,
		price: Math.floor(Math.random() * 30) + 8,
		provider: 'Namecheap',
	},
	{
		id: 3,
		name: `${domain}.org`,
		available: Math.random() > 0.7,
		price: Math.floor(Math.random() * 40) + 12,
		provider: 'GoDaddy',
	},
];

const ALTERNATIVE_RESULTS = [
	{
		id: 1,
		name: `${domain}.com`,
		available: Math.random() > 0.5,
		price: Math.floor(Math.random() * 50) + 10,
		provider: 'Google Domains',
	},
];

const DomainSearchForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults] = useState([]);

	const handleSearch = () => {
		// TODO: Based on the user input make a debounced API call to check domain availability
	};

	const getStatus = () => {
		if (!searchTerm && !searchResults.length) return 'default';
		if (searchTerm && !searchResults.length) return 'empty';
	};
	return (
		<Box as="section">
			<Box
				padding={6}
				className="shadow-xs rounded-xl border-1! border-gray-200!"
			>
				<Search
					value={searchTerm}
					onChange={(val) => setSearchTerm(val)}
					onSearch={handleSearch}
				/>
			</Box>
			<Box
				height="40rem"
				border="1px solid"
				paddingInline={10}
				paddingBlock={4}
				marginTop={4}
				className="border-gray-200! rounded-xl"
			>
				{!searchResults.length ? (
					<NoData status={getStatus()} />
				) : (
					<SearchResults data={searchResults} />
				)}
			</Box>
		</Box>
	);
};

export default DomainSearchForm;
