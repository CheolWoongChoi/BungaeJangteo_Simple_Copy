
import { getProducts, getSuggests } from './actions';

export type ProductType = {
	ad: boolean;
	ad_ref: string;
	bizseller: boolean;
	checkout: boolean;
	contact_hope: boolean;
	faved: boolean;
	free_shipping: boolean;
	imp_id: string;
	is_adult: boolean;
	is_super_up_shop: null;
	location: string;
	max_cpc: null;
	name: string;
	num_comment: string;
	num_faved: string;
	only_neighborhood: boolean;
	outlink_url: string;
	pid: string;
	price: string;
	product_image: string;
	pu_id: null;
	ref_campaign: null;
	ref_code: null;
	ref_content: string;
	ref_source: string;
	status: string;
	style: string;
	super_up: null;
	tag: string;
	uid: string;
	update_time: number;
	used: number;
}

export type AppState = {
	products: [];
	suggests: [];
}

export type AppAction =
	| ReturnType<typeof getProducts>
	| ReturnType<typeof getSuggests>