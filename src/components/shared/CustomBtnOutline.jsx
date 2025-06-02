import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';

const CustomBtnOutline = ({ icon, size, title }) => {
	return (
		<Button
			bg="white"
			variant="outline"
			size={size || 'sm'}
			color="black"
			borderRadius="md"
			fontWeight="medium"
			_hover={{ color: 'white', bg: 'black' }}
		>
			{icon}
			<Text>{title}</Text>
		</Button>
	);
};

export default CustomBtnOutline;
