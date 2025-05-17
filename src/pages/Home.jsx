import DomainSearch from '@/components/DomainSearch';
import HeroSearch from '@/components/HeroSearch';
import SegmentSlider from '@/components/shared/SegmentSlider';
import MainLayout from '@/layouts/MainLayout';
import { Box, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SLIDER_ITEMS = [
	{ label: 'Domain Search', value: 'domain_search', disabled: false },
	{
		label: 'Trending Domains',
		value: 'trending_domains',
		disabled: true,
	},
];

const Home = () => {
	const [view, setView] = useState('domain_search');

	return (
		<MainLayout>
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
		</MainLayout>
	);
};

export default Home;
