import axios from "axios";

const api = axios.create({
    baseURL: 'https://testbackend.nc-one.com',
})

export type Data = {
    id: number;
    name: string;
    price: number;
    src: string;
    like: boolean
};

export type GetDataResponse = {
    data: Data[];
};

export const shopServiceApi = {
    getCategories():any {
        return api.get<GetDataResponse>('image')
    },
    getProduct():any {
        return api.get<GetDataResponse>(`/image`)
    },
}