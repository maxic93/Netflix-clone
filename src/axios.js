import axios from 'axios'

const instan = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
})


export default instan