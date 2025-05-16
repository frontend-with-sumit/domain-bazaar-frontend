'use client';

import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defaultSystem,
} from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';

export function Provider(props) {
	const system = createSystem(defaultConfig, {
		theme: {
			tokens: {
				cursor: {
					button: { value: 'pointer' },
				},
			},
		},
	});
  
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
