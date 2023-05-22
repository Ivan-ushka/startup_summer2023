import {updateCatalogues} from "../state/filtersSlice";

export const fetchCatalogues = () => {
    let items = JSON.parse(localStorage.getItem('accessToken'));
    let accessToken = '';
    if (items) {
        accessToken = items.access_token
    }
    return async function (dispatch) {
        await fetch(`${process.env.REACT_APP_API_URL}/catalogues`, {
            headers: {
                'x-secret-key':  `${process.env.REACT_APP_X_SECRET_KEY}`,
                Authorization: `Bearer ${accessToken}`,
                'X-Api-App-Id': `${process.env.REACT_APP_X_API_APP_ID}`
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => dispatch(updateCatalogues(data)));

    }
}

