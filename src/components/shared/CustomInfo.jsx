import { Box, HStack, Text } from '@chakra-ui/react';

const CustomInfo = ({ icon, label, value }) => {
	return (
		<HStack alignItems="center" gap={2}>
			{icon}
			<Box>
				<Text fontSize="xs" className="text-gray-600" fontWeight={500}>
					{label}
				</Text>
				<Text fontSize="sm" fontWeight={600}>
					{value}
				</Text>
			</Box>
		</HStack>
	);
};

export default CustomInfo;
