import { Badge, Box, HStack, Show, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { IoGridSharp } from 'react-icons/io5';
import { TbLayoutListFilled } from 'react-icons/tb';
import SearchResultsView from './SearchResultsView';
import SegmentSlider from './shared/SegmentSlider';

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
				Primary Results <Badge className="bg-gray-200! text-black!">0</Badge>
			</Text>
		),
	},
	{
		value: 'alternative',
		label: (
			<Text>
				Alternatives <Badge className="bg-gray-200! text-black!">0</Badge>
			</Text>
		),
	},
];

const SearchResults = ({ data }) => {
	const [controls, setControls] = useState({
		view: 'grid',
		results: 'primary',
	});

	const handleControls = (type, value) =>
		setControls((prev) => ({ ...prev, [type]: value }));

	return (
		<VStack alignItems="initial" spaceY={4}>
			<Show when={data.length}>
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
			<SearchResultsView viewType={controls.view} data={data} />
		</VStack>
	);
};

export default SearchResults;
