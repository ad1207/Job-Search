import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        },
        params: {...query},        
      };
      
    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        }catch(err){
            setError(err);
            alert(err)
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data,isLoading,error,refetch};
}

export default  useFetch;