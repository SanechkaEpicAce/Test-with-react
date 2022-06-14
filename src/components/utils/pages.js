export const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}


export const getPagesArray = (totalPages) => {
	
	let result = []

	for (var i = 0; i < totalPages; i++) {
		result.push(i + 1)
	}
	return result;
}