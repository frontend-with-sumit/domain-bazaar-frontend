import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import DomainTable from './DomainTable';
import SectionHeading from './shared/SectionHeading';

const ITEMS = [
	{
		id: 1,
		domainName: 'exmple.com',
		registrar: 'GoDaddy',
		expiryDate: '2024-12-31',
		autoRenew: true,
	},
	{
		id: 2,
		domainName: 'mywebsite.org',
		registrar: 'NameCheap',
		expiryDate: '2027-2-12',
		autoRenew: false,
	},
];

const ListedDomains = () => {
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
				heading="Your Listed Domains"
				description="Manage domains that you have listed for sale."
			/>

			<DomainTable items={ITEMS} />
		</VStack>
	);
};

export default ListedDomains;
