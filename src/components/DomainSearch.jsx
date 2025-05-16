import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Filters from './Filters';
import DomainSearchForm from './DomainSearchForm';

const DomainSearch = () => {
	return (
		<Box width="full" lineHeight="2">
			<Heading as="h2" fontSize="2xl" fontWeight="700">
				Find Your Perfect Domain
			</Heading>
			<Text fontSize="sm" color="gray.700">
				Search across multiple providers to find available domains
			</Text>

			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
				gap={4}
				marginTop={4}
			>
				<GridItem>
					<Filters />
				</GridItem>
				<GridItem colSpan={3}>
					<DomainSearchForm />
				</GridItem>
			</Grid>
		</Box>
	);
};

export default DomainSearch;
