const fethcQuran = async (endpoint) => {
	const response = await fetch(`https://api.quran.com/api/v4/${endpoint}`);

	if (!response.ok) {
		throw new Error
	}
	return await response.json();
}

export default fethcQuran;