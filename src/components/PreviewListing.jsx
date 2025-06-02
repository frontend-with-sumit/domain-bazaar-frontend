import React from 'react';
import Sections from './shared/Sections';
import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { PiGlobeBold } from 'react-icons/pi';
import ListingStatus from './ListingStatus';
import Preview from './Preview';

const Header = () => {
	return (
		<VStack alignItems="initial" width="full" padding={4}>
			<HStack>
				<PiGlobeBold size={25} />
				<Heading size="md" fontWeight={700}>
					Preview Listing
				</Heading>
			</HStack>
			<Text fontSize="sm" color="gray.700" fontWeight={500}>
				How your domain listing will appear
			</Text>
		</VStack>
	);
};
const PreviewListing = () => {
	return (
		<Sections header={<Header />}>
			<VStack padding={3}>
				<Preview />
				<ListingStatus />
			</VStack>
		</Sections>
	);
};

export default PreviewListing;
