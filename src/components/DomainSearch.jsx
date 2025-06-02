import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Filters from './Filters';
import DomainSearchForm from './DomainSearchForm';
import SectionHeading from './shared/SectionHeading';

const DomainSearch = () => {
	return (
		<Box width="full" lineHeight="2">
			<SectionHeading
				heading="Find Your Perfect Domain"
				description="Search across multiple providers to find available domains"
			/>

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
