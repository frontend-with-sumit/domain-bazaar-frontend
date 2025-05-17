import { Badge, Box, HStack, Show, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IoGridSharp } from 'react-icons/io5';
import { TbLayoutListFilled } from 'react-icons/tb';
import SearchResultsView from './SearchResultsView';
import NoData from './shared/NoData';
import SegmentSlider from './shared/SegmentSlider';

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

const VIEW_CONTROL = [
	{
		value: 'grid',
		label: <IoGridSharp size={15} />,
	},
	{
		value: 'list',
		label: <TbLayoutListFilled size={15} />,
	},
];

const RESULT_CONTROL = [
	{
		value: 'primary',
		label: (
			<Text>
				Primary Results{' '}
				<Badge className="bg-gray-200! text-black!">
					{BASE_RESULTS.length}
				</Badge>
			</Text>
		),
	},
	{
		value: 'alternative',
		label: (
			<Text>
				Alternatives{' '}
				<Badge className="bg-gray-200! text-black!">
					{ALTERNATIVE_RESULTS.length}
				</Badge>
			</Text>
		),
	},
];

const SearchResults = () => {
	const [controls, setControls] = useState({
		view: 'grid',
		results: 'primary',
	});
	const [results, setResults] = useState([]);

	// useEffect(() => {
	// 	setResults(
	// 		controls.results === 'primary' ? BASE_RESULTS : ALTERNATIVE_RESULTS
	// 	);
	// }, [controls.results]);

	const handleControls = (type, value) =>
		setControls((prev) => ({ ...prev, [type]: value }));

	return (
		<VStack
			height="40rem"
			alignItems="initial"
			border="1px solid"
			paddingInline={10}
			paddingBlock={4}
			marginTop={4}
			className="border-gray-200! rounded-xl"
			spaceY={4}
		>
			<Show when={results.length}>
				<HStack justifyContent="space-between">
					<Text fontWeight={600}>Search Results</Text>
					<Box maxW="20rem">
						<SegmentSlider
							items={VIEW_CONTROL}
							initialValue={controls.view}
							onUpdateControl={(val) => handleControls('view', val)}
						/>
					</Box>
				</HStack>

				<Box width="25rem" margin="0 auto">
					<SegmentSlider
						items={RESULT_CONTROL}
						initialValue={controls.results}
						onUpdateControl={(val) => handleControls('results', val)}
					/>
				</Box>
			</Show>

			{/* INFO: Here data will be as per the results control type */}
			{!results.length ? (
				<NoData />
			) : (
				<SearchResultsView viewType={controls.view} data={results} />
			)}
		</VStack>
	);
};

export default SearchResults;
