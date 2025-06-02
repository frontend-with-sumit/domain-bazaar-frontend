import {
	VStack,
	Field,
	Input,
	Button,
	Textarea,
	Text,
	Select,
	createListCollection,
	Portal,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';
import * as Yup from 'yup';
import InfoText from './shared/InfoText';

const FIELDS = ['asking_price', 'auction_duration'];

const DURATIONS = createListCollection({
	items: [
		{ label: '7 days', value: '7_days' },
		{ label: '1 week', value: '1_week' },
	],
});

const DomainPricing = () => {
	const validationSchema = Yup.object({
		asking_price: Yup.string().required('Asking price is required'),
		auction_duration: Yup.string().required('Auction duration is required'),
	});

	const { errors, values, handleChange, handleSubmit } = useFormik({
		initialValues: {
			asking_price: '',
			auction_duration: '7_days',
		},
		validationSchema,
		onSubmit: (value) => console.log(JSON.stringify(value, null, 2)),
	});

	return (
		<form onSubmit={handleSubmit}>
			<VStack alignItems="flex-start" spaceY={3}>
				<Field.Root required invalid={errors[FIELDS[0]]}>
					<Field.Label htmlFor={FIELDS[0]} fontSize="sm">
						Asking Price <Field.RequiredIndicator />
					</Field.Label>
					<Input
						id={FIELDS[0]}
						name={FIELDS[0]}
						value={values[FIELDS[0]]}
						onChange={handleChange}
						placeholder="2500"
						className={
							errors[FIELDS[0]] ? 'border-red-300!' : 'border-gray-200!'
						}
						borderWidth={2}
						borderRadius="md"
						fontFamily="inherit"
					/>

					<Field.ErrorText>{errors[FIELDS[0]]}</Field.ErrorText>
				</Field.Root>

				<Field.Root invalid={errors[FIELDS[1]]} required>
					<Select.Root
						collection={DURATIONS}
						width="full"
						value={values[FIELDS[1]]}
						onChange={handleChange}
					>
						<Select.HiddenSelect />
						<Select.Label htmlFor={FIELDS[1]}>
							Auction Duration <Field.RequiredIndicator />
						</Select.Label>
						<Select.Control>
							<Select.Trigger
								borderWidth={2}
								borderRadius="md"
								className={
									errors[FIELDS[1]] ? 'border-red-300!' : 'border-gray-200!'
								}
							>
								<Select.ValueText placeholder="Select Auction Duration" />
							</Select.Trigger>
							<Select.IndicatorGroup>
								<Select.Indicator />
							</Select.IndicatorGroup>
						</Select.Control>
						<Portal>
							<Select.Positioner>
								<Select.Content
									bg="white"
									className="checked:bg-red-200! shadow-md!"
								>
									{DURATIONS.items.map((duration) => (
										<Select.Item
											item={duration}
											key={duration.value}
											_selected={{ bg: 'gray.100' }}
											_hover={{ bg: 'gray.100' }}
											padding={2}
										>
											{duration.label}
											<Select.ItemIndicator />
										</Select.Item>
									))}
								</Select.Content>
							</Select.Positioner>
						</Portal>
					</Select.Root>
					<Field.ErrorText>Auction duration is required</Field.ErrorText>
				</Field.Root>
				<InfoText />

				{/* UPCOMING Feature */}
				{/* <Button bg="black" color="white" size="xs" borderRadius="lg">
					<Text>Continue to Analytics</Text>
					<PiArrowRight size={20} />
				</Button> */}
			</VStack>
		</form>
	);
};

export default DomainPricing;
