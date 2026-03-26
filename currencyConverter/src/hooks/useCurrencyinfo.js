import { data } from "autoprefixer";
import { useEffect,useState } from "react";
function useCurrecyInfo(currency){

    // useEffect
    // useState

    useEffect(()=>{
        const[data, setData]=useState({})
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp)=>resp.json())
        .then((resp)=>setData(resp[currency]))
        
    },[currency])
    return data
}

export default useCurrecyInfo