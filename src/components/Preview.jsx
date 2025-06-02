import {
	Box,
	Card,
	Heading,
	HStack,
	Separator,
	Tag,
	Text,
} from '@chakra-ui/react';
import { PiChatBold, PiEyeBold, PiHeartBold, PiTagBold } from 'react-icons/pi';
import CustomTag from './shared/CustomTag';
import { MdOutlineAccessTime, MdOutlineTimer3 } from 'react-icons/md';

const Preview = ({ domain, category, description }) => {
	return (
		<Card.Root
			size="sm"
			variant="subtle"
			marginBottom={3}
			className="bg-slate-100!"
			color="black"
			width="full"
		>
			<Card.Header>
				<Box>
					<Heading size="lg" fontWeight="bolder">
						{domain || '-'}
					</Heading>
					<HStack>
						<PiTagBold size={17} className="text-gray-500!" />
						<Text className="text-gray-500" fontSize="sm" fontWeight="medium">
							{category || 'Category'}
						</Text>
					</HStack>
				</Box>
			</Card.Header>
			<Card.Body color="fg.subtle" fontWeight="medium">
				{description || 'No description provided yet.'}
				<Separator marginTop={4} borderColor="gray.300" />
			</Card.Body>
			<Card.Footer>
				<HStack justifyContent="space-between" width="full">
					<HStack>
						<CustomTag icon={<MdOutlineAccessTime />} label="New" />
						<CustomTag icon={<PiEyeBold />} label="0 views" />
					</HStack>
					<HStack gap={5}>
						<PiHeartBold size={20} />
						<PiChatBold size={20} />
					</HStack>
				</HStack>
			</Card.Footer>
		</Card.Root>
	);
};

export default Preview;
