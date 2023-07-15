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
            'X-RapidAPI-Key': '1be46db048msh1c2a599b8f6ae5dp1dd284jsnebf4d7ef05bf',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
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