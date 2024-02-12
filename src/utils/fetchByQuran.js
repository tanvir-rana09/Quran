const fetchQuranCom = async (endpoint) => {

	const response = await fetch(`https://api.alquran.cloud/v1/${endpoint}`, {
		cache: 'force-cache'
	});

	// if (!response.ok) {
	// 	throw new Error
	// }
	return await response.json();
}

export default fetchQuranCom;