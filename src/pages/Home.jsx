import DomainDetails from '@/components/DomainDetails';
import DomainSearch from '@/components/DomainSearch';
import HeroSearch from '@/components/HeroSearch';
import SegmentSlider from '@/components/shared/SegmentSlider';
import WhyUs from '@/components/WhyUs';
import MainLayout from '@/layouts/MainLayout';
import { Badge, Box, HStack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SLIDER_ITEMS = [
	{ label: 'Domain Search', value: 'domain_search', disabled: false },
	{
		label: (
			<HStack>
				<Text>Trending Domains </Text>
				<Badge>Upcoming</Badge>
			</HStack>
		),
		value: 'trending_domains',
		disabled: true,
	},
];

const Home = () => {
	const [view, setView] = useState('domain_search');

	return (
		<MainLayout>
			{/* Home Route */}
			<Box>
				<HeroSearch />
				<VStack
					width="100%"
					alignItems="center"
					paddingInline={{ base: '1rem', lg: '2rem', md: '1.5rem' }}
					paddingBlock={10}
				>
					<Box marginTop={3} marginBottom={8} width="30rem">
						<SegmentSlider
							items={SLIDER_ITEMS}
							initialValue={view}
							onUpdateControl={setView}
						/>
					</Box>
					<DomainSearch />
				</VStack>
				<WhyUs />
			</Box>
			{/* Domain Details */}
			{/* TODO: enable this using routes */}
			{/* <Box>
				<DomainDetails />
			</Box> */}
		</MainLayout>
	);
};

export default Home;
