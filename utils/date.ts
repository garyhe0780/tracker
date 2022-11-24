import { format } from '$std/datetime/mod.ts'

const __FORMAT = 'dd-MM-yyyy';

export function isToday(date: string) {
	return format(new Date(date), __FORMAT) === format(new Date(),  __FORMAT);
}

export function isYesterday(date: string) {
	const yesterday = getYesterday();
	return format(yesterday, __FORMAT) === format(new Date(date), __FORMAT);
}

export function getYesterday() {
	return new Date(new Date().setDate(new Date().getDate() - 1));
}
