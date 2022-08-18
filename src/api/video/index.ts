import axios from "axios"

export const getAllVideos = (page: number) =>
    axios.get(`https://stg.starzly.io/api/featured-videos?page=${page}&per_page=10&app=1&new=1`)
