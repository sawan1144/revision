import React, { createContext } from 'react'


export const Data = createContext();

const Usercontext = ({children}) => {

    const namee = 'Sawan'
  return (
    <div>
        <Data.Provider value={namee}>
            {children}
        </Data.Provider>
    </div>
  )
}

export default Usercontext