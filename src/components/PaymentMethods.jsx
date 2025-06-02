import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { PiPlus, PiPlusBold } from 'react-icons/pi';
import CustomBtnOutline from './shared/CustomBtnOutline';

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
				<CustomBtnOutline size="xs" icon={<PiPlusBold />} title="Add New" />
			</Flex>
		</VStack>
	);
};

export default PaymentMethods;
