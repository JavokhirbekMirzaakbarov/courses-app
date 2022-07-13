export function useLocalStorage() {
	const getItem = (key: string) => localStorage.getItem(key);
	const setItem = (key: string, value: string) =>
		localStorage.setItem(key, JSON.stringify(value));

	return { getItem, setItem };
}
