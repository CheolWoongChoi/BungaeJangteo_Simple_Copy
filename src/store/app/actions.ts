
export const GET_PRODUCTS = 'GET_PRODUCTS' as const; 
export const GET_SUGGESTS = 'GET_SUGGESTS' as const;

export const getProducts = ({ keyword, data }: { keyword: string, data: []}) => ({
	type: GET_PRODUCTS,
	payload: { keyword, data }
});

export const getSuggests = (data: []) => ({
	type: GET_SUGGESTS,
	payload: data
});

