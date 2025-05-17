import INFO_BADGE_TYPE from '@/utils/infoBadgeMap';
import {
	Box,
	Button,
	Card,
	Heading,
	HStack,
	Separator,
	Text,
} from '@chakra-ui/react';
import InfoBadge from './shared/InfoBadge';

const SearchResult = ({ result }) => {
	return (
		<Card.Root
			size="md"
			bg="white"
			color="black"
			className="border-gray-200! shadow-sm rounded-lg!"
		>
			<Card.Header>
				<HStack justifyContent="space-between" alignItems="flex-start">
					<Box>
						<Heading as="h3" fontWeight={700}>
							{result?.name}
						</Heading>
						<Text fontSize="sm" className="text-slate-500!" fontWeight={500}>
							{`Listed by ${result?.provider}`}
						</Text>
					</Box>
					<InfoBadge type={INFO_BADGE_TYPE[0]} />
				</HStack>
			</Card.Header>
			<Separator className="border-gray-200!" marginBlock={3} />
			<Card.Footer color="black" fontWeight={600}>
				<HStack justifyContent="space-between" width="full">
					<Text>{`$${result?.price}/year`}</Text>
					{/* TODO: Redirect to view details page */}
					<Button bg="black" color="white" size="xs" variant="solid">
						View Details
					</Button>
				</HStack>
			</Card.Footer>
		</Card.Root>
	);
};

export default SearchResult;
