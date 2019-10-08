import axios from 'axios'
/* eslint-disable */
export const instance_1 = axios.create({
    baseURL: 'https://mall-bae02.firebaseio.com',
    headers : {"Hello": "Google"}
})

export const instance_2 = axios.create({
    baseURL: 'https://mall-bae02.firebaseio.com/mall',
    headers : {"Hello": "Youtube"}
})
