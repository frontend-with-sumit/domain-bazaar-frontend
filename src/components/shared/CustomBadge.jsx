import { Badge } from '@chakra-ui/react';

const CustomBadge = ({ title, color }) => {
	const COLOR_VARIANTS = {
		gray: 'bg-gray-100! text-gray-800!',
		green: 'bg-green-100! text-green-800!',
		red: 'bg-red-100! text-red-800!',
		purple: 'bg-purple-100! text-purple-800!',
		blue: 'bg-blue-100! text-blue-800!',
	};

	return (
		<Badge
			className={`${COLOR_VARIANTS[color]}`}
			variant="subtle"
			width="fit-content"
			borderRadius="full"
			paddingInline={3}
			paddingBlock={1}
		>
			{title}
		</Badge>
	);
};

export default CustomBadge;
