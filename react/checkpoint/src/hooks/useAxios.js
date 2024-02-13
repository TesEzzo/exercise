
import axios from "axios"
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const refetch = async () => {
        if (error) {
            setError(null)
        }

        try {
            const response = await axios({
                url,
                method: "GET"
            })

            setData(response.data)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        refetch()
    }, [url])
    return{
        data,
        error,
        refetch
    }
}

export default useAxios