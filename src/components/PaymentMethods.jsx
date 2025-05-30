import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { PiPlus } from 'react-icons/pi';

const PaymentMethods = () => {
	return (
		<VStack
			width="full"
			alignItems="initial"
			spaceY={6}
			padding={5}
			borderRadius="lg"
			border="1px solid"
			className="shadow-md border-gray-200!"
		>
			<Flex alignItems="center" justifyContent="space-between">
				<Heading as="h6" size="md">
					Payment Methods
				</Heading>
				<Button
					variant="outline"
					size="xs"
					color="black"
					className="border-gray-200!"
					_hover={{ bg: 'black', color: 'gray.200' }}
				>
					<PiPlus /> <Text fontWeight={600}>Add New</Text>
				</Button>
			</Flex>
            
		</VStack>
	);
};

export default PaymentMethods;
