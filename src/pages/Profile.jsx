import ListedDomains from '@/components/ListedDomains';
import PaymentMethods from '@/components/PaymentMethods';
import PurchasedDomains from '@/components/PurchasedDomains';
import SegmentSlider from '@/components/shared/SegmentSlider';
import UserInfo from '@/components/UserInfo';
import MainLayout from '@/layouts/MainLayout';
import { Box, Grid, GridItem, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const DOMAIN_CONTROL = [
	{
		label: 'Purchased Domains',
		value: 'purchased-domains',
	},
	{ label: 'Listed Domains', value: 'listed-domains' },
];

const Profile = () => {
	const [currentView, setCurrentView] = useState('purchased-domains');

	return (
		<MainLayout>
			<Grid
				templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
				paddingInline={{ base: '1rem', lg: '2rem', md: '1.5rem' }}
				columnGap={6}
				marginBlock={6}
			>
				<GridItem>
					<VStack spaceY={4}>
						<UserInfo />
						<PaymentMethods />
					</VStack>
				</GridItem>
				<GridItem colSpan={3}>
					<VStack alignItems="initial" spaceY={4}>
						<SegmentSlider
							items={DOMAIN_CONTROL}
							initialValue={currentView}
							onUpdateControl={(val) => setCurrentView(val)}
						/>
						{currentView === 'purchased-domains' && <PurchasedDomains />}
						{currentView === 'listed-domains' && <ListedDomains />}
					</VStack>
				</GridItem>
			</Grid>
		</MainLayout>
	);
};

export default Profile;
