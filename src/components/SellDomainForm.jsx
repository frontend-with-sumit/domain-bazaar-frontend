import { Button, Field, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { PiArrowRight } from 'react-icons/pi';
import * as Yup from 'yup';

const SellDomainForm = ({ gotoNextStep }) => {
	const validationSchema = Yup.object({
		domain_name: Yup.string().required('Domain name is required'),
	});

	const { errors, values, handleChange, handleSubmit } = useFormik({
		initialValues: { domain_name: '', description: '', key_features: '' },
		validationSchema,
		onSubmit: (value) => console.log(JSON.stringify(value, null, 2)),
	});

	return (
		<form onSubmit={handleSubmit}>
			<VStack alignItems="flex-start" spaceY={3}>
				<Field.Root required invalid={errors['domain_name']}>
					<Field.Label htmlFor="domain_name" fontSize="sm">
						Domain Name <Field.RequiredIndicator />
					</Field.Label>
					<Input
						id="domain_name"
						name="domain_name"
						value={values.domain_name}
						onChange={handleChange}
						placeholder="example.com"
						className={
							errors['domain_name'] ? 'border-red-300!' : 'border-gray-200!'
						}
						borderWidth={2}
						borderRadius="md"
						fontFamily="inherit"
					/>

					<Field.ErrorText>{errors['domain_name']}</Field.ErrorText>
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
						A compelling description increases your chances of selling. Include
						keywords, potential uses and unique selling points.
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
		</form>
	);
};

export default SellDomainForm;
