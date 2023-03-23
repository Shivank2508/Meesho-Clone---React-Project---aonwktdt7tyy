import React, { useEffect, useState } from 'react'

export const DataAppContext = React.createContext();

const DataApp = (props) => {

    const initialState = {
        loginStatus: false,
        username: '',
        totalCount: 0,
    }

    const [appState, setAppState] = useState(initialState);

    useEffect(()=>{
        console.log("context data", appState);
    })

  return (
    <div>
        <DataAppContext.Provider value={{appState, setAppState}}>

            {props.children}

        </DataAppContext.Provider>
    </div>
  )
}

export default DataApp