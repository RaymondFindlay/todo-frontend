// api calls to web service
const callApi = async (url, options) => {
    const response = await fetch(url, options);

    return response;
}

const apiService = (methodType, url, body) => {

    const options = {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return callApi(url, options);
};

export default apiService;