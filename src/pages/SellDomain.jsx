import DomainListing from '@/components/DomainListing';
import PreviewListing from '@/components/PreviewListing';
import SectionHeading from '@/components/shared/SectionHeading';
import MainLayout from '@/layouts/MainLayout';
import { Box, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const SellDomain = () => {
	return (
		<MainLayout>
			<VStack
				alignItems="initial"
				marginBlock={6}
				paddingInline={{ base: '1rem', lg: '2rem', md: '1.5rem' }}
				spaceY={4}
			>
				<SectionHeading
					heading="Sell your domain"
					description="List your domain for sale in our marketplace"
				/>
				<Grid
					templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
					columnGap={6}
				>
					<GridItem colSpan={2}>
						<DomainListing />
					</GridItem>
					<GridItem colSpan={1}>
						<PreviewListing />
					</GridItem>
				</Grid>
			</VStack>
		</MainLayout>
	);
};

export default SellDomain;
