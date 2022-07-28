import React from 'react'


export const useTextInput = (initialState = '') => {

    const [value, setValue] = React.useState(initialState)

    const onChange = (e) => setValue(state => ({...state, [e.target.name] :e.target.value}))


    return [value, onChange]
}

