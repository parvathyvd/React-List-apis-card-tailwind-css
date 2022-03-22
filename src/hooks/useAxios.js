import axios from 'axios';
import React, { useState } from 'react';

const useAxios = (query) => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const fetchData = async(params) => {
        try{
            setLoading(true);
            const res = await  axios.get(`https://api.publicapis.org/${query}`, params)
            setResponse(res.data)
        }
        catch(error){
            setErr(error)
        }
        finally{
            setLoading(false)
        }
    }

    return {
        fetchData: (params) => fetchData(params),
        response,
        loading,
        err
    }
};

export default useAxios;