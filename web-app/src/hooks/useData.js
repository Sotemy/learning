import { useState } from 'react'
import axios from "axios"

export const useData = async ({ url, data }) => {

    const [requestedData, requestData] = useState('')
    const response = await axios.get(url, data)
    requestData(response.json())

    return requestedData

}
