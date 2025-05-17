import DomainDetails from '@/components/DomainDetails';
import DomainSearch from '@/components/DomainSearch';
import HeroSearch from '@/components/HeroSearch';
import SegmentSlider from '@/components/shared/SegmentSlider';
import WhyUs from '@/components/WhyUs';
import MainLayout from '@/layouts/MainLayout';
import { Badge, Box, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SLIDER_ITEMS = [
	{ label: 'Domain Search', value: 'domain_search', disabled: false },
	{
		label: (
			<Text>
				Trending Domains <Badge>Upcoming</Badge>
			</Text>
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
					<Box marginTop={3} marginBottom={8}>
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
			<Box>
				<DomainDetails />
			</Box>
		</MainLayout>
	);
};

export default Home;
