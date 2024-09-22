import axios from "axios";
export const errorHandler = (err) => {
    console.log('error',err)
    console.log(err?.response?.status)
    switch (err?.response?.status) {
        case 400:
            console.log('Invalid Request')
            break;
        case 401:
            console.log('Unauthorized')
            // redirect()
            break;
        case 500:
            console.log('Server Error: Please check you token', err.response)
            if (err.response.data.includes("401") || err.response.data.includes("UNAUTHORIZED"))
                console.log("Unauthorized");
                // redirect()
            break;
        default:
            console.log('Unwanted Error')
    }
    return Promise.reject(err);
}

export const interceptor = () => {
    axios.defaults.withCredentials = true;
    axios.interceptors.response.use(
        (res) => res, (err) => errorHandler(err))
}