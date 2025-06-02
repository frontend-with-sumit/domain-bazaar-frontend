import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const SectionHeading = ({ heading, description }) => {
	return (
		<Box width="full">
			<Heading as="h2" fontSize="2xl" fontWeight="700">
				{heading}
			</Heading>
			<Text className="text-gray-700!" fontWeight={500}>
				{description}
			</Text>
		</Box>
	);
};

export default SectionHeading;
