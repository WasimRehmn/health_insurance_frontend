import React, { createContext, useState } from 'react'
export const PremiumContext = createContext()

function PremiumContextProvider({ children }) {
    const [data, setData] = useState({})
    const [postData, setPostData] = useState({})
    const [selectData, setSelectData] = useState([])


    return (
        <PremiumContext.Provider value={{ data, setData, postData, setPostData, selectData, setSelectData }}>{children}</PremiumContext.Provider>
    )
}

export default PremiumContextProvider