import { SegmentGroup } from '@chakra-ui/react';
import { useState } from 'react';

const SegmentSlider = ({ items, initialValue, onUpdateControl }) => {
	const [content] = useState(items || []);

	return (
		<SegmentGroup.Root
			width="full"
			className="bg-gray-200!"
			padding="4px"
			borderRadius="md"
			value={initialValue}
			onValueChange={(evt) => onUpdateControl(evt.value)}
		>
			<SegmentGroup.Indicator
				flex={1}
				background="white"
				className="shadow-xs!"
				borderRadius="md"
			/>
			<SegmentGroup.Items
				flex={1}
				letterSpacing="wide"
				className="text-gray-700!"
				fontSize="xs"
				fontWeight="500"
				items={content}
				height="1.7rem"
				_checked={{ fontWeight: '600', color: 'gray.700' }}
			/>
		</SegmentGroup.Root>
	);
};

export default SegmentSlider;
