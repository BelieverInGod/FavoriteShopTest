import axios from "axios";

const api = axios.create({
    baseURL: 'https://testbackend.nc-one.com',
})

type User = {
    id: number;
    price: string;
    src: string;
  };

type GetUsersResponse = {
    data: User[];
  };

export const shopServiceApi = {
    getCategories():any {
        return api.get<GetUsersResponse>('image')
    },
    getProduct():any {
        return api.get<GetUsersResponse>(`/image`)
    },
}