import { EmptyState, VStack } from '@chakra-ui/react';
import { LuShoppingCart } from 'react-icons/lu';

const NoData = () => {
	return (
		<EmptyState.Root size="sm">
			<EmptyState.Content>
				<EmptyState.Indicator>{/* <LuShoppingCart /> */}</EmptyState.Indicator>
				<VStack textAlign="center">
					<EmptyState.Title>Start your search</EmptyState.Title>
					<EmptyState.Description>
						Enter a domain name to check it availability across providers
					</EmptyState.Description>
				</VStack>
			</EmptyState.Content>
		</EmptyState.Root>
	);
};

export default NoData;
