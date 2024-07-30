import axios from "axios";


const BASE_URL = "https://api.github.com"


axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`

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