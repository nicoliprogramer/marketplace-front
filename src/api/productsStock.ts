import { axiosBack } from "./back.api"

const endpoint = "store"

export const products = {
    getAll: function(){
        return axiosBack.get(endpoint)
    },
}