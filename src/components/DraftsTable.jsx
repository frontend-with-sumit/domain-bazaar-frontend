import { Button, Flex, Table } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const renderActions = ({ id, onEdit, onDelete }) => {
	return (
		<Flex justifyContent="center" gap={4} alignItems="center">
			<Button _hover={{ textDecoration: 'underline' }} onClick={onEdit}>
				<Link to={`/sell-domain/${id}/edit`}>Edit</Link>
			</Button>
			<Button _hover={{ textDecoration: 'underline' }} onClick={onDelete}>
				Delete
			</Button>
		</Flex>
	);
};

const DraftsTable = ({ table }) => {
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
								{item.last_saved}
							</Table.Cell>
							<Table.Cell fontWeight="500" className="border-gray-200!">
								{item.price}
							</Table.Cell>
							<Table.Cell fontWeight="500" className="border-gray-200!">
								{item.category}
							</Table.Cell>
							<Table.Cell textAlign="center" className="border-gray-200!">
								{renderActions({ id: item?.id })}
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Table.ScrollArea>
	);
};

export default DraftsTable;
