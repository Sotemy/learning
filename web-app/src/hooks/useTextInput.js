import axios from 'axios'
import React from 'react'

export const useTextInput = (initialState = '') => {

    const [value, setValue] = React.useState(initialState)

    const onChange = (e) => {
        setValue(e.target.value)
        console.log(value)
    }   


  return {value, onChange}
}

export const onSubmit = (url, data, e) => {

    console.log(data)

    e.preventDefault()
    axios.post(`${url}`,data)

}
export const useFillControl = () => {

}