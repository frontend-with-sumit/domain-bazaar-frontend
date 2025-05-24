import { EmptyState, Flex, Image, VStack } from '@chakra-ui/react';
import noData from '../../assets/images/empty.svg';
import search from '../../assets/images/search.svg';

const content = {
	empty: {
		image: noData,
		title: 'No results found',
		description: 'Please refine your search. Try adjusting the filters',
	},
	default: {
		image: search,
		title: 'Start your search',
		description:
			'Enter a domain name to check its availability across providers',
	},
};

const NoData = ({ status }) => {
	return (
		<Flex
			height="full"
			width="full"
			justifyContent="center"
			alignItems="center"
		>
			<EmptyState.Root size="sm">
				<EmptyState.Content>
					<EmptyState.Indicator>
						<Image
							src={content[status]?.image}
							alt={content[status]?.title}
							height="200px"
						/>
					</EmptyState.Indicator>
					<VStack textAlign="center">
						<EmptyState.Title>{content[status]?.title}</EmptyState.Title>
						<EmptyState.Description>
							{content[status]?.description}
						</EmptyState.Description>
					</VStack>
				</EmptyState.Content>
			</EmptyState.Root>
		</Flex>
	);
};

export default NoData;
