import axios from "axios";

const api = axios.create({
    baseURL: 'https://testbackend.nc-one.com',
})

export const shopServiceApi = {
    getCategories():any {
        return api.get('image')
    },
    getProduct():any {
        return api.get(`/image`)
    },
}