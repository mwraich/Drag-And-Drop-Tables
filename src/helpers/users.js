// Inserted this logic here since it's mainly focused on view logic
import { differenceInDays } from 'date-fns';

export const getFullName = ({ firstName, lastName }) => {
	return `${firstName} ${lastName}`;
};

export const getDaysSinceRegistered = ({ registeredDate }) => {
	return differenceInDays(new Date(), new Date(registeredDate));
};
