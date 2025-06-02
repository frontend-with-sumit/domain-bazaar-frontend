import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { PiGlobeBold, PiUpload, PiUploadSimple } from 'react-icons/pi';
import SellDomainForm from './SellDomainForm';
import Sections from './shared/Sections';
import SegmentSlider from './shared/SegmentSlider';
import { IoDocumentTextOutline } from 'react-icons/io5';
import DomainPricing from './DomainPricing';

const CONTROLS = ['domain_details', 'pricing', 'analytics'];

const ITEMS = [
	{ label: 'Domain Details', value: 'domain_details' },
	{ label: 'Pricing', value: 'pricing' },
];

const Header = () => {
	return (
		<VStack alignItems="initial" width="full" padding={4}>
			<HStack>
				<PiGlobeBold size={25} />
				<Heading size="md" fontWeight={700}>
					Domain Listing
				</Heading>
			</HStack>
			<Text fontSize="sm" color="gray.700" fontWeight={500}>
				Enter the details of the domain you want to sell
			</Text>
		</VStack>
	);
};

const Footer = () => {
	return (
		<HStack padding={4} justifyContent="space-between">
			<Button
				bg="white"
				variant="outline"
				size="sm"
				color="black"
				borderRadius="md"
				fontWeight="medium"
				_hover={{ color: 'white', bg: 'black' }}
			>
				<IoDocumentTextOutline />
				<Text>Save as Draft</Text>
			</Button>
			<Button
				size="sm"
				borderRadius="md"
				className="disabled:bg-gray-700! disabled:text-white!"
				bg="black"
				color="white"
				disabled
				fontWeight="bold"
			>
				<PiUploadSimple /> <Text>Publish Listing</Text>
			</Button>
		</HStack>
	);
};
const DomainListing = () => {
	const [viewControl, setViewControl] = useState(CONTROLS[1]);
	return (
		<Sections header={<Header />} footer={<Footer />}>
			<VStack alignItems="initial" width="full" padding={4} spaceY={4}>
				<SegmentSlider
					items={ITEMS}
					initialValue={viewControl}
					onUpdateControl={(val) => setViewControl(val)}
				/>
				{viewControl === CONTROLS[0] && (
					<SellDomainForm gotoNextStep={() => setViewControl(CONTROLS[1])} />
				)}
				{viewControl === CONTROLS[1] && <DomainPricing />}
			</VStack>
		</Sections>
	);
};

export default DomainListing;
