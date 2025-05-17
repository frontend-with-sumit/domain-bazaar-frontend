import {
	Box,
	Card,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Separator,
	Text,
	VStack,
} from '@chakra-ui/react';
import { PiCalendarDots } from 'react-icons/pi';
import CustomInfo from './shared/CustomInfo';
import { GoClock, GoGlobe } from 'react-icons/go';

const DomainInfo = () => {
	return (
		<Card.Root
			size="lg"
			borderRadius="lg"
			bg="white"
			color="black"
			className="border-gray-200! shadow-sm"
		>
			<Card.Body>
				<VStack alignItems="initial" spaceY={2}>
					<Heading size="md" color="black">
						Domain Information
					</Heading>
					<Text className="text-gray-700" fontSize="sm">
						Perfect domain for tech startups and innovation companies. This
						domain name combines 'tech' and 'wave' to create a modern, forward
						thinking brand identity that resonate with technology enthusiasts
						and innovators.
					</Text>

					<Grid templateColumns="repeat(2, 1fr)" rowGap={5}>
						<GridItem>
							<CustomInfo
								icon={<PiCalendarDots size={25} />}
								label="Listing Date"
								value="15/10/2025"
							/>
						</GridItem>
						<GridItem>
							<CustomInfo
								icon={<PiCalendarDots size={25} />}
								label="Expiry Date"
								value="15/10/2026"
							/>
						</GridItem>
						<GridItem>
							<CustomInfo
								icon={<GoGlobe size={25} />}
								label="Registrar"
								value="GoDaddy"
							/>
						</GridItem>
						<GridItem>
							<CustomInfo
								icon={<GoClock size={25} />}
								label="Domain Age"
								value="1 year(s)"
							/>
						</GridItem>
					</Grid>

					<Separator className="border-gray-200!" />

					<Flex justifyContent="space-evenly" gap="12rem" textAlign="center">
						<CustomInfo label="Views" value="245" />
						<CustomInfo label="Offers" value="3" />
						<CustomInfo label="Watchlisted" value="12" />
					</Flex>
				</VStack>
			</Card.Body>
		</Card.Root>
	);
};

export default DomainInfo;
