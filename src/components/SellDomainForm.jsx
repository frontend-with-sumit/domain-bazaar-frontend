import {
	Button,
	createListCollection,
	Field,
	HStack,
	Input,
	NumberInput,
	Portal,
	Select,
	Text,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { PiArrowRight, PiSealCheckFill } from 'react-icons/pi';
import { RiCloseFill } from 'react-icons/ri';
import { SELL_DOMAIN_VIEW_CONTROL as VIEW_CONTROL } from '../utils/viewControls';
import InfoText from './shared/InfoText';

const FIELDS = [
	'domain_name',
	'description',
	'key_features',
	'asking_price',
	'auction_duration',
];

const VERIFICATION_STATUS = ['Verify', 'Verifying', 'Verified', 'Not Verified'];

const DURATIONS = createListCollection({
	items: [
		{ label: '7 days', value: '7_days' },
		{ label: '1 week', value: '1_week' },
	],
});

const SellDomainForm = ({
	values,
	errors,
	touched,
	handleChange,
	handleBlur,
	setFieldValue,
	view,
	gotoNextStep,
}) => {
	const [verificationStatus, setVerificationStatus] = useState({
		label: VERIFICATION_STATUS[0],
		isVerified: false,
	});

	/**
	 * IMPORTANT: This funtion needs validation from client and server
	 * On client anyone can enable the publish listing button from elements tab, we need extra validation on the server so that whoever owns the domain should be the one to list it for sale.
	 */
	const handleDomainVerification = () => {
		console.log('It will perform domain verification');
	};

	return (
		<form>
			{view === VIEW_CONTROL[0] && (
				<VStack alignItems="flex-start" spaceY={3}>
					<Field.Root required invalid={errors[FIELDS[0]]}>
						<Field.Label htmlFor={FIELDS[0]} fontSize="sm">
							Domain Name <Field.RequiredIndicator />
						</Field.Label>
						<HStack width="full">
							<Input
								id={FIELDS[0]}
								name={FIELDS[0]}
								value={values[FIELDS[0]]}
								onChange={handleChange}
								placeholder="example.com"
								className={
									errors[FIELDS[0]] ? 'border-red-300!' : 'border-gray-200!'
								}
								borderWidth={2}
								borderRadius="md"
								fontFamily="inherit"
							/>
							<Button
								bg={
									verificationStatus.label === VERIFICATION_STATUS[2] ||
									verificationStatus.label === VERIFICATION_STATUS[3]
										? 'white'
										: 'black'
								}
								className={
									verificationStatus.label === VERIFICATION_STATUS[2]
										? 'text-green-700! border-green-600!'
										: verificationStatus.label === VERIFICATION_STATUS[3]
										? 'text-red-700! border-red-600!'
										: ''
								}
								variant="surface"
								size="sm"
								borderRadius="md"
								onClick={handleDomainVerification}
								disabled={!values[FIELDS[0]]}
								loadingText={verificationStatus.label}
								loading={verificationStatus.label === VERIFICATION_STATUS[1]}
							>
								<HStack>
									{verificationStatus.label === VERIFICATION_STATUS[2] ? (
										<PiSealCheckFill />
									) : (
										verificationStatus.label === VERIFICATION_STATUS[3] && (
											<RiCloseFill />
										)
									)}
									<Text fontWeight="medium" fontSize="md">
										{verificationStatus.label}
									</Text>
								</HStack>
							</Button>
						</HStack>
						<Field.ErrorText>{errors[FIELDS[0]]}</Field.ErrorText>
					</Field.Root>

					<Field.Root>
						<Field.Label htmlFor="description" fontSize="sm">
							Description
						</Field.Label>
						<Textarea
							id="description"
							name="description"
							value={values.description}
							onChange={handleChange}
							placeholder="Describe your domain and its potential uses ...."
							className="border-gray-200!"
							borderWidth={2}
							borderRadius="md"
							fontFamily="inherit"
							rows={3}
						/>
						<Field.HelperText>
							A compelling description increases your chances of selling.
							Include keywords, potential uses and unique selling points.
						</Field.HelperText>
					</Field.Root>

					<Field.Root>
						<Field.Label htmlFor="key_features" fontSize="sm">
							Key Features
						</Field.Label>
						<Textarea
							id="key_features"
							name="key_features"
							value={values.key_features}
							onChange={handleChange}
							placeholder="List key features or benefits of this domain ...."
							className="border-gray-200!"
							borderWidth={2}
							borderRadius="md"
							fontFamily="inherit"
							rows={3}
						/>
						<Field.HelperText>
							Separate features with commas or new lines. Example: Short and
							memorable, Brandable, Industry-specific
						</Field.HelperText>
					</Field.Root>

					<Button
						bg="black"
						color="white"
						size="xs"
						borderRadius="lg"
						onClick={gotoNextStep}
					>
						<Text>Continue to Pricing</Text>
						<PiArrowRight size={20} />
					</Button>
					
				</VStack>
			)}

			{view === VIEW_CONTROL[1] && (
				<VStack alignItems="flex-start" spaceY={3}>
					<Field.Root
						required
						invalid={touched[FIELDS[3]] && errors[FIELDS[3]]}
					>
						<Field.Label htmlFor={FIELDS[3]} fontSize="sm">
							Asking Price <Field.RequiredIndicator />
						</Field.Label>
						<NumberInput.Root
							width="full"
							value={values[FIELDS[3]]}
							onValueChange={({ value }) => setFieldValue(FIELDS[3], value)}
						>
							<NumberInput.Input
								id={FIELDS[3]}
								name={FIELDS[3]}
								placeholder="2500"
								borderWidth={2}
								borderRadius="md"
								fontFamily="inherit"
								className={
									touched[FIELDS[3]] && errors[FIELDS[3]]
										? 'border-red-300!'
										: 'border-gray-200!'
								}
								onBlur={handleBlur}
							/>
						</NumberInput.Root>

						<Field.ErrorText>{errors[FIELDS[3]]}</Field.ErrorText>
					</Field.Root>

					<Field.Root invalid={errors[FIELDS[4]]} required>
						<Select.Root
							collection={DURATIONS}
							width="full"
							value={values[FIELDS[4]]}
							onValueChange={({ value }) =>
								setFieldValue('auction_duration', value)
							}
						>
							<Select.HiddenSelect />
							<Select.Label htmlFor={FIELDS[4]}>
								Auction Duration <Field.RequiredIndicator />
							</Select.Label>
							<Select.Control>
								<Select.Trigger
									borderWidth={2}
									borderRadius="md"
									className={
										errors[FIELDS[4]] ? 'border-red-300!' : 'border-gray-200!'
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
				</VStack>
			)}
		</form>
	);
};

export default SellDomainForm;
