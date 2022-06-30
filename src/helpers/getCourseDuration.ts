export function getCourseDuration(totalMinutes: number) {
	let minutes = String(totalMinutes % 60);
	let hours = String((totalMinutes - +minutes) / 60);

	if (+hours < 10) {
		hours = `0${hours}`;
	}
	if (+minutes < 10) {
		minutes = `0${minutes}`;
	}

	return `${hours}:${minutes} hours`;
}
