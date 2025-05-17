import { Grid, GridItem } from '@chakra-ui/react';
import SearchResult from './SearchResult';

const SearchResultsView = ({ viewType, data: results }) => {
	return (
		<Grid
			templateColumns={{
				base: '1fr',
				md: viewType === 'grid' ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
			}}
			columnGap={4}
			rowGap={4}
			marginTop={5}
			paddingRight={2}
			maxHeight="30rem"
			className="overflow-y-auto overscroll-contain scroll-smooth snap-y"
		>
			{results.map((result) => (
				<GridItem key={result?.id} className="snap-start snap-always">
					<SearchResult result={result} />
				</GridItem>
			))}
		</Grid>
	);
};

export default SearchResultsView;
