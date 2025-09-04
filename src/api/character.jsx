import api from "./api"

export const getCharacters = async()=>{
    const response = await api.get('/character')
    if (response.status!==200){
        return[]
    }

    return response.data.results

}