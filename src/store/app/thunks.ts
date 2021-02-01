import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getProducts, getSuggests } from './actions';
import classNames from 'classnames/bind';
import styles from 'components/OrderTab/OrderTab.scss';

const cx = classNames.bind(styles);
const orderTab = cx('order-tab');
const selected = cx('selected');

export function getProductsThunk({ keyword, order }: { [key: string]: string }): ThunkAction<void, RootState, null, ReturnType<typeof getProducts>> {
	return async (dispatch: any) => {
		try {
			const res = await axios.get('https://api.stg-bunjang.co.kr/api/1/find_v2.json', {
				params: {
					q: keyword,
					order,
					version: 4
				}
			});

			dispatch(
				getProducts({ keyword, data: res.data.list })
			);

			document.querySelector(`.${orderTab} .${selected}`)?.classList.remove(selected); 
			document.querySelector(`.${orderTab} .${order}`)?.classList.add(selected);
		
		} catch (e) {
			alert('getProductsThunk 에러');
		}
	};
}

export function getSuggestsThunk({ keyword }: { keyword: string }): ThunkAction<void, RootState, null, ReturnType<typeof getSuggests>> {
	return async dispatch => {
		try {
			const res = await axios.get('https://api.stg-bunjang.co.kr/api/1/search/suggests_keyword.json', {
				params: {
					q: keyword,
					type: 'product',
					v: 2
				}
			});
			let suggests = res.data.keywords;

			if (suggests.length > 10) {
				suggests = suggests.slice(0, 10);
			}

			dispatch(
				getSuggests(suggests)
			);
		} catch(e) {
			alert('getSuggestsThunk 에러');
		}
	}
}