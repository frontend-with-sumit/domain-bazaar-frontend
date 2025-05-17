import { Button, Card, FormatNumber, Heading, Text } from '@chakra-ui/react';
import { PiShoppingCartSimple } from 'react-icons/pi';

const PriceCard = () => {
	return (
		<Card.Root
			size="md"
			bg="white"
			className="border-gray-200! shadow-sm"
			flex={1}
		>
			<Card.Header>
				<Heading size="md" color="black">
					Pricing
				</Heading>
			</Card.Header>
			<Card.Body color="black">
				<Text
					textStyle="lg"
					fontWeight={500}
					className="font-secondary!"
					marginBottom={5}
				>
					{/* INFO: currency selection will be done from the profile section */}
					{/* TODO: update the price as per the domain price */}
					<FormatNumber value={2500} style="currency" currency="USD" />
				</Text>

				<Button bg="black" color="white" size="sm">
					<PiShoppingCartSimple /> Buy Now
				</Button>
			</Card.Body>
		</Card.Root>
	);
};

export default PriceCard;
