import { HStack, Text } from '@chakra-ui/react';
import React from 'react';

const FooterNav = () => {
	return (
		<HStack gap={5} fontSize="xs" fontWeight={500} className="text-gray-800">
			<Text>About</Text>
			<Text>Contact</Text>
			<Text>Terms</Text>
			<Text>Privacy</Text>
		</HStack>
	);
};

export default FooterNav;
