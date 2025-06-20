import { Badge, Box, Button, Flex, Table } from '@chakra-ui/react';
import React from 'react';

const renderActions = (onEdit, onDelete) => {
	return (
		<Flex justifyContent="center" gap={4} alignItems="center">
			<Button _hover={{ textDecoration: 'underline' }} onClick={onEdit}>
				Edit
			</Button>
			<Button _hover={{ textDecoration: 'underline' }} onClick={onDelete}>
				Delete
			</Button>
		</Flex>
	);
};

const DomainTable = ({ table }) => {
	const { columns, data } = table;

	return (
		<Table.ScrollArea maxHeight="350px" height="auto" width="full">
			<Table.Root
				variant="line"
				size="md"
				bg="white"
				colorPalette="gray"
				stickyHeader
			>
				<Table.Header>
					<Table.Row
						bg="white"
						borderBottomWidth="2px"
						className="text-gray-500! border-gray-200!"
						fontWeight="600"
					>
						{columns?.map((column, idx) => (
							<Table.ColumnHeader
								key={idx}
								color="inherit"
								fontWeight="inherit"
								borderColor="inherit"
								textAlign={idx === table.columns.length - 1 ? 'center' : 'left'}
							>
								{column}
							</Table.ColumnHeader>
						))}
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{data?.map((item) => (
						<Table.Row key={item.id} bg="white">
							<Table.Cell fontWeight={600} className="border-gray-200!">
								{item.domain_name}
							</Table.Cell>
							<Table.Cell fontWeight="500" className="border-gray-200!">
								{item.registrar}
							</Table.Cell>
							<Table.Cell fontWeight="500" className="border-gray-200!">
								{item.expiry_date}
							</Table.Cell>
							<Table.Cell fontWeight="500" className="border-gray-200!">
								{item.auto_renew ? (
									<Badge>{item.auto_renew ? 'Enabled' : 'Disabled'}</Badge>
								) : (
									<Badge
										variant="subtle"
										bg="white"
										color="black"
										border="1px solid"
										className="border-gray-200!"
										fontWeight="600"
									>
										{item.auto_renew ? 'Enabled' : 'Disabled'}
									</Badge>
								)}
							</Table.Cell>
							<Table.Cell textAlign="center" className="border-gray-200!">
								{renderActions()}
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Table.ScrollArea>
	);
};

export default DomainTable;
