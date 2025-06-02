import { HStack, Text } from '@chakra-ui/react';
import { MdOutlineAccessTime } from 'react-icons/md';

const CustomTag = ({ icon, label }) => {
	return (
		<HStack
			border="1px solid"
			borderColor="gray.400"
			borderRadius="sm"
			paddingInline={2}
			paddingBlock={1}
		>
			{icon}
			<Text fontWeight="medium" fontSize="sm">
				{label}
			</Text>
		</HStack>
	);
};

export default CustomTag;
