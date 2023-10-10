const API = 'http://localhost:3000/api'

export const get = async (path) => {
    const token = localStorage.getItem('token');
    const response = await fetch(API+path, {
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": "aplication/json; charset=uft-8"                
        }
    })
    if (response) {
        const results = response.json()
        return (results)
    }    
}

export const post = (path, options) => {
    return (
        fetch (API+path, options,{

        })
    )
}