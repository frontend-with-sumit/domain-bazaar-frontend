import { Text } from '@chakra-ui/react';

const Copyright = () => {
	return (
		<Text
			fontSize="sm"
			fontWeight={500}
			marginTop={3}
			className="text-gray-500"
		>
			&copy; 2025 DomainBazaar. All rights reserved.
		</Text>
	);
};

export default Copyright;
