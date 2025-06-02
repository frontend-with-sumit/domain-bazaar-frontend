import { Box, Heading, HStack, Table, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
import {
	PiCheckBold,
	PiInfo,
	PiInfoBold,
	PiSealCheckBold,
	PiWarningBold,
} from 'react-icons/pi';
import { v4 as uuidv4 } from 'uuid';

const ITEMS = [
	{
		id: uuidv4(),
		label: 'Domain Verified:',
		value: 'Pending',
		hasInfo: true,
		isStatusType: true,
	},
	{
		id: uuidv4(),
		label: 'Visibility:',
		value: 'Public',
	},
	{
		id: uuidv4(),
		label: 'Price Type:',
		value: 'Fixed',
	},
];

const DOMAIN_VERIFY_STATUS = ['Not Verified', 'Pending', 'Verified'];

const COLORS = {
	error: 'text-red-500',
	warning: 'text-yellow-500',
	success: 'text-green-500',
};

const getColor = (text) =>
	text === DOMAIN_VERIFY_STATUS[0]
		? COLORS['error']
		: text === DOMAIN_VERIFY_STATUS[1]
		? COLORS['warning']
		: text === DOMAIN_VERIFY_STATUS[2]
		? COLORS['success']
		: 'text-gray-800';

const getIcon = (text) => {
	return text === DOMAIN_VERIFY_STATUS[0] ? (
		<IoIosClose className={COLORS['error']} size={25} />
	) : text === DOMAIN_VERIFY_STATUS[1] ? (
		<PiWarningBold className={COLORS['warning']} size={18} />
	) : (
		text === DOMAIN_VERIFY_STATUS[2] && (
			<PiSealCheckBold className={COLORS['success']} size={18} />
		)
	);
};

const ListingStatus = () => {
	return (
		<Box
			bg="gray.50"
			paddingInline={2}
			paddingBlock={2}
			width="full"
			borderRadius="lg"
		>
			<Heading as="h6" size="sm" paddingLeft={2} marginBottom={1}>
				Listing Status
			</Heading>
			<Table.Root size="sm" fontFamily="inherit">
				<Table.Body>
					{ITEMS.map((item) => (
						<Table.Row key={item.id} bg="gray.50">
							<Table.Cell
								borderBottom="none"
								fontWeight="medium"
								paddingBottom={0}
							>
								{item.label}
							</Table.Cell>
							<Table.Cell
								borderBottom="none"
								textAlign="end"
								fontWeight="bold"
								paddingBottom={0}
							>
								<HStack justifyContent="flex-end" gap={1}>
									{getIcon(item.value)}
									<Text className={getColor(item.value)}>{item.value}</Text>
								</HStack>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Box>
	);
};

export default ListingStatus;
