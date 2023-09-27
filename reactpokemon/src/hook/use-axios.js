import { useEffect, useState } from "react"

export default function useAxios(configRequest) {

const { axiosInstance, method, url, otherConfig = {} } = configRequest

const [data, setData ] = useState([]);
const [error, setError] = useState('');
const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchData =  async () => {
        try {
            const results = await axiosInstance[method](url, {
                ...otherConfig,
            })
            setData(results.data)
        } catch (err) {
            setError(err.message)
        }
        finally {
            setLoading(false)                                                                                                          ;
        }
        
    }
    fetchData()
}, [])

return [data, error, loading, setData]
}