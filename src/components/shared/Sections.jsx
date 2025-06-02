import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { PiGlobe } from 'react-icons/pi';

const Sections = ({ header, children, footer }) => {
	return (
		<VStack
			alignItem="initial"
			width="full"
			border="2px solid"
			className="border-gray-200!"
			borderRadius="lg"
			overflow="hidden"
		>
			{/* Header */}
			{header && (
				<Box
					className="bg-gray-100 border-b-gray-200!"
					borderBottom="1px solid"
					width="full"
				>
					{header}
				</Box>
			)}

			{/* Body */}
			{children && <Box width="full">{children}</Box>}

			{/* Footer */}
			{footer && (
				<Box
					className="bg-gray-100 border-t-gray-200!"
					borderTop="1px solid"
					width="full"
				>
					{footer}
				</Box>
			)}
		</VStack>
	);
};

export default Sections;
