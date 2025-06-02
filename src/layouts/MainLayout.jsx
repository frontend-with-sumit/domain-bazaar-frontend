import Copyright from '@/components/Copyright';
import FooterNav from '@/components/FooterNav';
import Navigation from '@/components/Navigation';
import Logo from '@/components/shared/Logo';
import { Box, Container, Flex } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
	return (
		<Box>
			{/* Navbar */}
			<Flex
				as="header"
				justifyContent="center"
				alignItems="center"
				width="100%"
				minHeight="64px"
				borderBottom="1px solid"
				borderColor="gray.200"
				className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
			>
				<Container
					paddingInline={{ base: '1rem', lg: '2rem', md: '1.5rem' }}
					marginInline="auto"
					width="100%"
					maxWidth="8xl"
				>
					<Flex justifyContent="space-between" alignItems="center">
						<Logo />
						<Navigation />
					</Flex>
				</Container>
			</Flex>

			{/* Main Content */}
			<Box as="main">
				<Container
					minH="80dvh"
					maxWidth="8xl"
					width="100%"
					position="relative"
					marginInline="auto"
					paddingInline={0}
				>
					{children}
				</Container>
			</Box>

			{/* Footer */}
			<Flex
				as="footer"
				justifyContent="center"
				alignItems="center"
				width="100%"
				minHeight="64px"
				className="bg-white"
				paddingTop={4}
				paddingBottom={2}
				marginTop={2}
				borderTop="1px solid"
				borderColor="gray.200"
			>
				<Container
					paddingInline={{ base: '1rem', lg: '2rem', md: '1.5rem' }}
					marginInline="auto"
					width="100%"
					maxWidth="8xl"
					textAlign="center"
				>
					<Flex justifyContent="space-between" alignItems="center">
						<Logo />
						<FooterNav />
					</Flex>
					<Copyright />
				</Container>
			</Flex>
		</Box>
	);
};

export default MainLayout;
