import { Badge, Box, Text, Wrap } from '@chakra-ui/react';

const DOMAINS_BADGES = [
	'.com',
	'.net',
	'.org',
	'.co',
	'.io',
	'.ai',
	'.app',
	'.dev',
];

const DomainExtensionsFilter = ({
	selectedExtensions,
	onDomainExtensionsUpdate,
}) => {
	return (
		<Box>
			<Text fontWeight={600} fontSize="sm">
				Domain Extensions
			</Text>
			<Wrap marginTop={2}>
				{DOMAINS_BADGES.map((badge, idx) => (
					<Badge
						key={idx}
						className="shadow-sm"
						background={selectedExtensions.includes(badge) ? 'black' : 'white'}
						color={selectedExtensions.includes(badge) ? 'white' : 'black'}
						border="1px solid"
						borderColor="gray.200"
						fontWeight={600}
						paddingInline={2}
						paddingBlock={1}
						onClick={() => onDomainExtensionsUpdate(badge)}
					>
						{badge}
					</Badge>
				))}
			</Wrap>
		</Box>
	);
};

export default DomainExtensionsFilter;
