import {updateData} from "../state/outSlice";
import {store} from "../state/store";
import {updateCatalogues} from "../state/filtersSlice";


export const fetchData = () => {
    let s = store.getState();
    let catalogues = s.filters.catalogues;
    let page = Number(s.out.page);
    let payment_from = s.filters.lower;
    let payment_to = s.filters.upper;
    let keyword = s.inpNameJob.nameJob
    let url = `${process.env.REACT_APP_API_URL}/vacancies/?&count=4&catalogues=${catalogues}&page=${page}&payment_from=${payment_from}$payment_to=${payment_to}&keyword=${keyword}`
    return function (dispatch, getState) {
        fetch(url, {
            headers: {
                'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                'Authorization': 'Bearer v3.r.137440105.4635fb5d84978a7c984930593acb23d86e0cd70f.d78283d77957075a955e762bcaa728b170640bdd',
                'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {console.log(data);dispatch(updateData(data))});

    }
}

export const fetchCatalogues = () => {
    return async function (dispatch) {
        await fetch(`${process.env.REACT_APP_API_URL}/catalogues`, {
            headers: {
                'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                'Authorization': 'Bearer v3.r.137440105.4635fb5d84978a7c984930593acb23d86e0cd70f.d78283d77957075a955e762bcaa728b170640bdd',
                'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => dispatch(updateCatalogues(data)));

    }
}

