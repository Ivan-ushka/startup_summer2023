import {updateListVacancies} from "../state/listVacanciesSlice";
import {store} from "../state/store";

export const fetchData = () => {
    let s = store.getState();
    let catalogues = s.filters.catalogues;
    let page = Number(s.out.page);
    let payment_from = s.filters.lower;
    let payment_to = s.filters.upper;
    let keyword = s.nameVac.nameVacancy

    let url = `${process.env.REACT_APP_API_URL}/vacancies/?&count=4&catalogues=${catalogues}&page=${page}&payment_from=${payment_from}$payment_to=${payment_to}&keyword=${keyword}`

    let items = JSON.parse(localStorage.getItem('accessToken'));
    let accessToken = '';
    if (items) {
        accessToken = items.access_token
    }

    return function (dispatch) {
        fetch(url, {
            headers: {
                'x-secret-key':  `${process.env.REACT_APP_X_SECRET_KEY}`,
                Authorization: `Bearer ${accessToken}`,
                'X-Api-App-Id': `${process.env.REACT_APP_X_API_APP_ID}`
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(data =>{dispatch(updateListVacancies(data))});
    }
}



