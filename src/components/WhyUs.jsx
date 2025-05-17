import {
	Avatar,
	Box,
	Card,
	Grid,
	GridItem,
	Heading,
	VStack,
} from '@chakra-ui/react';
import { LuSearch, LuUser } from 'react-icons/lu';
import InfoCard from './shared/InfoCard';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';

const WhyUs = () => {
	return (
		<VStack
			as="section"
			className="bg-gray-200"
			paddingInline={{ base: '1rem', lg: '2rem', md: '1.5rem' }}
			paddingBlock={16}
			textAlign="center"
			gap={16}
		>
			<Heading as="h3" fontSize="4xl" fontWeight={700}>
				Why Choose Our Domain Marketplace
			</Heading>
			<Grid templateColumns="auto auto auto" columnGap="10" paddingInline={10}>
				<GridItem>
					<InfoCard
						icon={<LuSearch size="1.5rem" />}
						title="Multi-Provider Search"
						description="Search across multiple domain providers simultaneously to find the best deals and availability."
					/>
				</GridItem>
				<GridItem>
					<InfoCard
						icon={<PiShoppingCartSimpleBold size="1.5rem" />}
						title="Buy & Sell Marketplace"
						description="List your domains for sale or browse our marketplace to find premium domains for your next project."
					/>
				</GridItem>
				<GridItem>
					<InfoCard
						icon={<LuUser size="1.5rem" />}
						title="Profile Management"
						description="List your domains for sale or browse our marketplace to find premium domains for your next project."
					/>
				</GridItem>
			</Grid>
		</VStack>
	);
};

export default WhyUs;
