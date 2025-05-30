import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import DomainTable from './DomainTable';

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
	{
		id: 3,
		domainName: 'businessdomain.net',
		registrar: 'Bluehost',
		expiryDate: '2024-10-22',
		autoRenew: true,
	},
];

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
			<Box width="full">
				<Heading as="h3" fontWeight="600" marginBottom="5px">
					Your Purchased Domains
				</Heading>
				<Text fontSize="md" fontWeight="500" className="text-gray-600">
					Manage domains that you currently own.
				</Text>
			</Box>

			<DomainTable items={ITEMS} />
		</VStack>
	);
};

export default PurchasedDomains;
