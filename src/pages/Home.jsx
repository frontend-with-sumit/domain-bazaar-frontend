import DomainSearch from '@/components/DomainSearch';
import SegmentSlider from '@/components/shared/SegmentSlider';
import MainLayout from '@/layouts/MainLayout';
import { Box, SegmentGroup } from '@chakra-ui/react';

const SLIDER_ITEMS = ['Domain Search', 'Trending Domains'];
const Home = () => {
	return (
		<MainLayout>
			<DomainSearch />
			<Box width="100%" textAlign="center" marginTop={10}>
				<SegmentSlider items={SLIDER_ITEMS} />
			</Box>
		</MainLayout>
	);
};

export default Home;
