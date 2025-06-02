import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { PiPencilSimpleFill } from 'react-icons/pi';
import defaultAvatar from '@/assets/images/avatar.jpg';
import CustomInfo from './shared/CustomInfo';
import CustomBtnOutline from './shared/CustomBtnOutline';

const UserInfo = () => {
	return (
		<VStack
			width="full"
			alignItems="initial"
			spaceY={5}
			padding={5}
			borderRadius="lg"
			border="1px solid"
			className="shadow-md border-gray-200!"
		>
			<Flex alignItems="center" justifyContent="space-between">
				<Heading as="h6" size="md">
					Profile
				</Heading>
				<CustomBtnOutline
					size="xs"
					icon={<PiPencilSimpleFill />}
					title="Edit"
				/>
			</Flex>
			<VStack spaceY={2}>
				<Image
					src={defaultAvatar}
					boxSize="130px"
					borderRadius="full"
					fit="cover"
				/>
				<Box textAlign="center">
					<Heading as="h5" size="xl" fontWeight="700">
						John Doe
					</Heading>
					<Text fontSize="md" fontWeight="500" className="text-gray-500!">
						john@example.com
					</Text>
				</Box>
			</VStack>
			<VStack alignItems="initial" spaceY={2}>
				<CustomInfo label="Phone" value="+1 (555) 123-4567" />
				<CustomInfo label="Address" value="123 Main ST, Anytown, USA" />
			</VStack>
		</VStack>
	);
};

export default UserInfo;
