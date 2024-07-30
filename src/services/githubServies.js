import axios from "axios";


const BASE_URL = "https://api.github.com"
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || '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';

axios.defaults.headers.common['Authorization'] = `Bearer ${GITHUB_TOKEN}`

const searchUsers = (queries) => {
    return axios.get(`${BASE_URL}/search/users`, {
        params: {
            q: queries,
        },
    })
}

const getUserDetails = (username) => {
    return axios.get(`${BASE_URL}/users/${username}`)
}

const githubServices = {searchUsers, getUserDetails,}

export default githubServices