const {useState, createContext, useContext } = require("react");

// setup context api to pass phone number
const AppContext = createContext()

export const AppProvider = ({children}) => {
  const [phone, setPhone] = useState('')
  return (
    <AppContext.Provider value={{phone, setPhone}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
};