import { useState } from "react"
import { useParams } from "react-router-dom"



export function useDetails() {


    const {id} = useParams()

    const [data, setData] = useState({})

    async function fetchData() {

        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=42f82aeb`)
        const json = await response.json()

        setData({
            poster: json.Poster,
            title: json.Title,
            runtime: json.Runtime,
            year: json.Year,
            director: json.Director
        
        })

    }

    return{
        data, 
        fetchData
    }

}