import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import DomainTable from './DomainTable';
import SectionHeading from './shared/SectionHeading';

// NOTE: Separate column name using underscores
const ITEMS = [
	{
		id: 1,
		domain_name: 'exmple.com',
		registrar: 'GoDaddy',
		expiry_date: '2024-12-31',
		auto_renew: true,
	},
	{
		id: 2,
		domain_name: 'mywebsite.org',
		registrar: 'NameCheap',
		expiry_date: '2027-2-12',
		auto_renew: false,
	},
	{
		id: 3,
		domain_name: 'businessdomain.net',
		registrar: 'Bluehost',
		expiry_date: '2024-10-22',
		auto_renew: true,
	},
];

const TABLE_DATA = {
	columns: ['Domain Name', 'Registrar', 'Expiry Date', 'Auto Renew', 'Actions'],
	data: ITEMS,
};

const PurchasedDomains = () => {
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
				heading="Your Purchased Domains"
				description="Manage domains that you currently own"
			/>

			<DomainTable table={TABLE_DATA} />
		</VStack>
	);
};

export default PurchasedDomains;
