import defaultAvatar from '@/assets/images/avatar.jpg';
import { Avatar, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const UserProfile = () => {
	return (
		<HStack>
			<Avatar.Root size="sm">
				<Avatar.Fallback name="John Doe" />
				<Avatar.Image src={defaultAvatar} />
			</Avatar.Root>
			<Text fontSize="sm" fontWeight="600" letterSpacing="wide">
				John Doe
			</Text>
		</HStack>
	);
};

export default UserProfile;
