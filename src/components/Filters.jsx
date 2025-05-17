import { Box, HStack, Separator, Text, VStack } from '@chakra-ui/react';
import { FiFilter } from 'react-icons/fi';
import PriceRangeFilter from './shared/Filter/PriceRangeFilter';
import DomainExtensionsFilter from './shared/Filter/DomainExtensionsFilter';
import { useState } from 'react';

const Filters = () => {
	const [filters, setFilters] = useState({ price: [50], domainExtensions: [] });

	const updateFilter = (filter, value) => {
		switch (filter) {
			case 'PF': // Price Filter
				setFilters((prev) => ({ ...prev, price: value }));
				break;
			case 'DEF': // Domain Extensions Filter
				setFilters((prev) => ({
					...prev,
					domainExtensions: prev.domainExtensions.includes(value)
						? prev.domainExtensions.filter((ext) => ext !== value)
						: [...prev.domainExtensions, value],
				}));
		}
	};

	return (
		<VStack
			className="shadow-sm rounded-xl"
			width="full"
			border="1px solid"
			borderColor="gray.200"
			alignItems="flex-start"
			padding={4}
		>
			<HStack>
				<FiFilter />
				<Text fontWeight="600">Filters</Text>
			</HStack>

			<Box width="full">
				<PriceRangeFilter
					selectedPrice={filters.price}
					onPriceUpdate={(value) => updateFilter('PF', value)}
				/>
				<Separator marginTop={7} marginBottom={5} borderColor="gray.200" />
				<DomainExtensionsFilter
					selectedExtensions={filters.domainExtensions}
					onDomainExtensionsUpdate={(value) => updateFilter('DEF', value)}
				/>
			</Box>
		</VStack>
	);
};

export default Filters;
