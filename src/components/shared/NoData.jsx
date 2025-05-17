import { EmptyState, Flex, Image, VStack } from '@chakra-ui/react';
import noData from '../../assets/images/empty.svg';
import search from '../../assets/images/search.svg';

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
						{status === 'empty' && (
							<Image src={noData} alt="No Data" height="200px" />
						)}
						<Image src={search} alt="Search" height="200px" />
					</EmptyState.Indicator>
					<VStack textAlign="center">
						<EmptyState.Title>Start your search</EmptyState.Title>
						<EmptyState.Description>
							Enter a domain name to check its availability across providers
						</EmptyState.Description>
					</VStack>
				</EmptyState.Content>
			</EmptyState.Root>
		</Flex>
	);
};

export default NoData;
