export const  fetchAuthorization = async () => {
    let url = `${process.env.REACT_APP_API_URL}/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=${process.env.REACT_APP_X_API_APP_ID}&hr=0`
    fetch(url, {
        method: 'GET',
        headers: {
            'x-secret-key': `${process.env.REACT_APP_X_SECRET_KEY}`,
            'X-Api-App-Id': `${process.env.REACT_APP_X_API_APP_ID}`
        },
    })
        .then(response => response.json())
        .then(data =>localStorage.setItem('accessToken', JSON.stringify(data)))
}