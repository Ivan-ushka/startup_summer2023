import {updateCatalogues, updateData} from "../state/outSlice";
import {selectLower, selectUpper} from "../state/filtersSlice";

export const fetchData = () => {
    return function(dispatch) {
        fetch(`https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?payment_from=50000`, {
            headers: {
                'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                'Authorization': 'Bearer v3.r.137440105.d2695a4fa7f92e90ef830ed84d26e57921a6b7d3.c3aff4a251656fe7c46be398f499e51306a659a6',
                'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => dispatch(updateData(data)));
    }
}


export const fetchCatalogues = () => {
    return function(dispatch) {
        fetch('https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/', {
            headers: {
                'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                'Authorization': 'Bearer v3.r.137440105.d2695a4fa7f92e90ef830ed84d26e57921a6b7d3.c3aff4a251656fe7c46be398f499e51306a659a6',
                'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
            },
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => dispatch(updateCatalogues(data)));
    }
}

