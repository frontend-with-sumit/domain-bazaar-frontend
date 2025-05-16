import Navigation from '@/components/Navigation';
import { Box, Container, Flex, HStack, Text } from '@chakra-ui/react';
import { PiGlobeSimpleBold } from 'react-icons/pi';

const MainLayout = ({ children }) => {
	return (
		<>
			<Flex
				as="header"
				justifyContent="center"
				alignItems="center"
				position="sticky"
				top={0}
				width="100%"
				minHeight="64px"
				borderBottom="1px solid"
				borderColor="gray.200"
				zIndex={10}
			>
				<Container
					paddingInline={{ base: 'auto', lg: 'spacing.8', md: 'spacing.6' }}
					marginInline="auto"
					width="100%"
					maxWidth="8xl"
				>
					<Flex justifyContent="space-between" alignItems="center">
						<HStack alignItems="center">
							<PiGlobeSimpleBold size={30} />
							<Text fontWeight="700">DomainBazaar</Text>
						</HStack>
						<Navigation />
					</Flex>
				</Container>
			</Flex>

			<Box as="main">
				<Container
					paddingInline={{ base: '0', lg: 'spacing.8', md: 'spacing.6' }}
					maxWidth="8xl"
					width="100%"
					position="relative"
					marginInline="auto"
				>
					{children}
				</Container>
			</Box>
		</>
	);
};

export default MainLayout;
