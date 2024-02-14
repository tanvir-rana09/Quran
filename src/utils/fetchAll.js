const fethcQuran = async (endpoint) => {
	
	if(endpoint === 'pages'){
		return null
	}  
	const response = await fetch(`https://api.quran.com/api/v4/${endpoint}`,{
		cache:'force-cache'
	});

	// if (!response.ok) {
	// 	throw new Error
	// }
	return await response.json();
}

export default fethcQuran;