// api calls to web service
const callApi = async (url, options) => {
    const response = await fetch(url, options)
        .then(response => console.log(response))
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


// const post = async (method, url, body) => {
//     const response = await fetch(url, {
//         method: method,
//         body: JSON.stringify(body)
//     })
// }

// switch(method) {
//     case 'GET': console.log(method, url, body);
//     break;
//     case 'POST': console.log(method, url, body);
//     break;
//     case 'DELETE': console.log(method, url, body);
//     break;
//     default: console.log(method, url, body)
// }