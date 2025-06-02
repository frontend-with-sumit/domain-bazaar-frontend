import DomainListing from '@/components/DomainListing';
import PreviewListing from '@/components/PreviewListing';
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
				<Box>
					<Heading as="h2" fontSize="2xl" fontWeight="700">
						Sell Your Domain
					</Heading>
					<Text className="text-gray-700!" fontWeight={500}>
						List your domain for sale in our marketplace
					</Text>
				</Box>
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
