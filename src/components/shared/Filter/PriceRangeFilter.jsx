import { Box, HStack, Slider, Text } from '@chakra-ui/react';
import React from 'react';

const PriceRangeFilter = ({ selectedPrice, onPriceUpdate }) => {
	return (
		<Box>
			<Text fontWeight={600} fontSize="sm" marginBottom={2}>
				Price Range
			</Text>
			<Slider.Root
				size="md"
				value={selectedPrice}
				onValueChange={(evt) => onPriceUpdate(evt.value)}
				variant="outline"
			>
				<Slider.Control>
					<Slider.Track bg="gray.200">
						<Slider.Range bg="black" />
					</Slider.Track>
					<Slider.Thumb index={0}>
						<Slider.DraggingIndicator
							width="3rem"
							textAlign="center"
							layerStyle="outline.solid"
							bg="black"
							fontWeight={500}
							top="-7"
							rounded="sm"
						>
							<Slider.ValueText>${selectedPrice}</Slider.ValueText>
						</Slider.DraggingIndicator>
					</Slider.Thumb>
				</Slider.Control>
				<HStack justify="space-between">
					<Slider.Label>$0</Slider.Label>
					<Slider.Label>$100</Slider.Label>
				</HStack>
			</Slider.Root>
		</Box>
	);
};

export default PriceRangeFilter;
