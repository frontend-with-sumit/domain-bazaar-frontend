import { SELL_DOMAIN_VIEW_CONTROL as VIEW_CONTROL } from '@/utils/viewControls';
import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import { useState } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { PiGlobeBold, PiUploadSimple } from 'react-icons/pi';
import * as Yup from 'yup';
import SellDomainForm from './SellDomainForm';
import Sections from './shared/Sections';
import SegmentSlider from './shared/SegmentSlider';

const ITEMS = [
	{ label: 'Domain Details', value: 'domain_details' },
	{ label: 'Pricing', value: 'pricing' },
];

const validationSchema = Yup.object({
	domain_name: Yup.string().required('Domain name is required'),
	description: Yup.string(),
	key_features: Yup.string(),
	asking_price: Yup.string().required('Asking price is required'),
	auction_duration: Yup.array()
		.of(Yup.string())
		.required('Auction duration is required'),
});

const FORM_FIELDS = [
	{
		id: 'domain_name',
		name: 'domain_name',
		label: 'Domain Name',
		required: true,
	},
];

const Header = () => {
	return (
		<VStack alignItems="initial" width="full" padding={4}>
			<HStack>
				<PiGlobeBold size={25} />
				<Heading size="md" fontWeight={700}>
					Domain Listing
				</Heading>
			</HStack>
			<Text fontSize="sm" color="gray.700" fontWeight={500}>
				Enter the details of the domain you want to sell
			</Text>
		</VStack>
	);
};

const Footer = ({ isDisabled, submitForm }) => {
	return (
		<HStack padding={4} justifyContent="space-between">
			<Button
				bg="white"
				variant="outline"
				size="sm"
				color="black"
				borderRadius="md"
				fontWeight="medium"
				_hover={{ color: 'white', bg: 'black' }}
			>
				<IoDocumentTextOutline />
				<Text>Save as Draft</Text>
			</Button>
			<Button
				size="sm"
				borderRadius="md"
				className="disabled:bg-gray-700! disabled:text-white!"
				bg="black"
				color="white"
				disabled={isDisabled}
				fontWeight="bold"
				onClick={submitForm}
			>
				<PiUploadSimple /> <Text>Publish Listing</Text>
			</Button>
		</HStack>
	);
};
const DomainListing = () => {
	const [view, setView] = useState(VIEW_CONTROL[0]);
	const form = {
		fields: {
			domain_name: '',
			description: '',
			key_features: '',
			asking_price: '',
			auction_duration: [], // always be an array.
		},
		required: ['domain_name', 'asking_price', 'auction_duration'],
	};

	const submitForm = (values, actions) => {
		console.log('Form submitted with values: ', values);
		actions.resetForm();
	};

	const saveToDraft = () => {
		// API: save drafts
	};

	return (
		<Formik
			initialValues={form.fields}
			validationSchema={validationSchema}
			onSubmit={submitForm}
			enableReinitialize
		>
			{({
				errors,
				values,
				handleChange,
				touched,
				handleBlur,
				handleSubmit,
				setFieldValue,
			}) => {
				const allRequiredFilled = form.required.every((field) => {
					const value = values[field];
					if (Array.isArray(value)) return value.length > 0;
					return !!value?.toString().trim();
				});

				const hasErrors = Object.keys(errors).length > 0;

				const isDisabled = !allRequiredFilled || hasErrors;

				return (
					<Sections
						header={<Header />}
						footer={
							<Footer
								submitForm={handleSubmit}
								onSaveToDraft={saveToDraft}
								isDisabled={isDisabled}
							/>
						}
					>
						<VStack alignItems="initial" width="full" padding={4} spaceY={4}>
							<SegmentSlider
								items={ITEMS}
								initialValue={view}
								onUpdateControl={(val) => setView(val)}
							/>
							<SellDomainForm
								values={values}
								errors={errors}
								touched={touched}
								view={view}
								handleChange={handleChange}
								handleBlur={handleBlur}
								setFieldValue={setFieldValue}
								gotoNextStep={() => setView(VIEW_CONTROL[1])}
							/>
						</VStack>
					</Sections>
				);
			}}
		</Formik>
	);
};

export default DomainListing;
