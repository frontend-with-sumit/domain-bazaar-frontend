import { SegmentGroup } from '@chakra-ui/react';
import React, { useState } from 'react';

const SegmentSlider = ({ items }) => {
	const [content, setContent] = useState(items);

	return (
		<SegmentGroup.Root
			background="blue.50"
			padding="4px"
			borderRadius="md"
			defaultValue={content[0]}
		>
			<SegmentGroup.Indicator
				background="white"
				boxShadow="0 0 0 0.5px rgba(0, 0, 0, 0.1)"
				borderRadius="md"
			/>
			<SegmentGroup.Items
				letterSpacing="wide"
				color="gray.500"
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
