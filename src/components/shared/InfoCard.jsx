import { Box, Card } from '@chakra-ui/react';

const InfoCard = ({ icon, title, description }) => {
	return (
		<Card.Root
			bg="white"
			className="border-gray-200! text-black! shadow-sm"
			borderRadius="xl"
		>
			<Card.Body gap="2">
				<Box
					className="bg-gray-200"
					width="fit-content"
					padding="0.8rem"
					borderRadius="full"
				>
					{icon}
				</Box>
				<Card.Title mt="2" fontSize="xl">
					{title}
				</Card.Title>
				<Card.Description className="text-gray-600!" fontWeight={500}>
					{description}
				</Card.Description>
			</Card.Body>
		</Card.Root>
	);
};

export default InfoCard;
