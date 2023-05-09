import axios from 'axios'
import React from 'react'

const apiAnime = axios.create({
    baseURL: 'https://api.jikan.moe/v4/'
})

export default apiAnime