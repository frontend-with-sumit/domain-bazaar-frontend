import TAGS from '@/utils/featuredTags';
import {
	Box,
	Grid,
	GridItem,
	HStack,
	Tag,
	Text,
	VStack,
} from '@chakra-ui/react';
import { PiHeart } from 'react-icons/pi';
import SegmentSlider from './shared/SegmentSlider';
import { useState } from 'react';
import DomainInfo from './DomainInfo';
import PriceCard from './PriceCard';

const INFO_CONTROLS = [
	{ label: 'Overview', value: 'overview' },
	{ label: 'Analytics', value: 'analytics' },
	{ label: 'Similar Domains', value: 'similar_domains' },
];

const DomainDetails = () => {
	const [infoControl, setInfoControl] = useState('overview');
	return (
		<Grid
			templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
			paddingInline={{ base: '1rem', lg: '2rem', md: '1.5rem' }}
			columnGap={6}
		>
			<GridItem colSpan={3}>
				<VStack width="full" alignItems="initial" spaceY={6}>
					<HStack justifyContent="space-between">
						<VStack alignItems="flex-start">
							<Text fontWeight={700} fontSize="xl" textAlign="left">
								techwave.io
							</Text>
							<HStack>
								<Tag.Root
									bg="white"
									variant="outline"
									color="black"
									className="border-gray-100!"
								>
									<Tag.Label fontWeight={600}>{TAGS['technology']}</Tag.Label>
								</Tag.Root>
								<Tag.Root>
									<Tag.Label>{TAGS['featured']}</Tag.Label>
								</Tag.Root>
							</HStack>
						</VStack>
						<Box
							className="border-gray-200!"
							border="1px solid"
							width="fit-content"
							padding={2}
							borderRadius="lg"
						>
							<PiHeart size="1.5rem" />
						</Box>
					</HStack>

					<SegmentSlider
						items={INFO_CONTROLS}
						initialValue={infoControl}
						onUpdateControl={(val) => setInfoControl(val)}
					/>

					<DomainInfo />
				</VStack>
			</GridItem>
			<GridItem>
				<PriceCard />
			</GridItem>
		</Grid>
	);
};

export default DomainDetails;
