export function getAPIEndpoint() {

    // check for api base
    if (process.env.REACT_APP_API_BASE_URL === undefined || process.env.REACT_APP_API_BASE_URL === null) {

        // default
        return "http://localhost:8080"
    }
    else {

        // return env var
        return process.env.REACT_APP_API_BASE_URL
    }
}