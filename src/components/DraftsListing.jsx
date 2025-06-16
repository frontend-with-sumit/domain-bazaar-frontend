import { VStack } from '@chakra-ui/react';
import React from 'react';
import SectionHeading from './shared/SectionHeading';
import DomainTable from './DomainTable';
import DraftsTable from './DraftsTable';

const ITEMS = [
	{
		id: 1,
		domain_name: 'example.com',
		last_saved: '15/05/25, 14:27:19',
		price: '$1500',
		category: 'Technology',
	},
	{
		id: 2,
		domain_name: 'premium-name.io',
		last_saved: '14/05/25, 18:20:20',
		price: '$100',
		category: 'Business',
	},
];

const TABLE_DATA = {
	columns: ['Domain Name', 'Last Saved', 'Price', 'Category', 'Actions'],
	data: ITEMS,
};

const DraftsListing = () => {
	return (
		<VStack
			alignItem="initial"
			spaceY={6}
			flex={1}
			border="1px solid"
			borderRadius="lg"
			padding={4}
			className="border-gray-200! shadow-md"
		>
			<SectionHeading
				heading="Your Drafts Listing"
				description="Continue working on your save domain listings"
			/>

			<DraftsTable table={TABLE_DATA} />
		</VStack>
	);
};

export default DraftsListing;
