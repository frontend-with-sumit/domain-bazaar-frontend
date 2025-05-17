import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { PiGlobeSimpleBold } from 'react-icons/pi';

const Logo = () => {
	return (
		<HStack alignItems="center">
			<PiGlobeSimpleBold size={30} />
			<Text fontWeight="700">DomainBazaar</Text>
		</HStack>
	);
};

export default Logo;
