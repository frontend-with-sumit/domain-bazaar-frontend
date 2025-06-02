import { HStack, Text } from '@chakra-ui/react';
import { PiInfoBold } from 'react-icons/pi';

const InfoText = () => {
	return (
		<HStack
			border="1px solid"
			padding={3}
			borderRadius="lg"
			className="border-gray-400! bg-gray-100 text-gray-600"
		>
			<PiInfoBold size={25} />
			<Text fontSize="sm" fontWeight="500">
				Pricing Tips: Based on similar domains, the recommended price range is{' '}
				<i>min_range</i>-<i>max_range</i>. Check the Analytics tab for more
				detailed pricing insights.
			</Text>
		</HStack>
	);
};

export default InfoText;
