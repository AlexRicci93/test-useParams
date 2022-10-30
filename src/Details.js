import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDetails } from "./useDetails";

export function Details() {
    
    const {data, fetchData} = useDetails()
    
    useEffect(()=> {
        fetchData()
    }, [])

    return(
        <>
        <div>
            <img src={data.poster}/>
            <h2>{data.title}</h2>
            <h2>{data.year}</h2>
            <h2>{data.runtime}</h2>
            <h2>{data.director}</h2>
        </div>
        </>
    )
}