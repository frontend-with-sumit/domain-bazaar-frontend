import { Badge } from '@chakra-ui/react';
import CustomBadge from './CustomBadge';
import INFO_BADGE_TYPE from '@/utils/infoBadgeMap';

const InfoBadge = ({ type }) => {
	return (
		<>
			{type === INFO_BADGE_TYPE[0] && (
				<CustomBadge color="gray" title={INFO_BADGE_TYPE[0]} />
			)}
			{type === INFO_BADGE_TYPE[1] && (
				<CustomBadge color="green" title={INFO_BADGE_TYPE[1]} />
			)}
			{type === INFO_BADGE_TYPE[2] && (
				<CustomBadge color="red" title={INFO_BADGE_TYPE[2]} />
			)}
			{type === INFO_BADGE_TYPE[3] && (
				<CustomBadge color="blue" title={INFO_BADGE_TYPE[3]} />
			)}
			{type === INFO_BADGE_TYPE[4] && (
				<CustomBadge color="purple" title={INFO_BADGE_TYPE[4]} />
			)}
		</>
	);
};

export default InfoBadge;
