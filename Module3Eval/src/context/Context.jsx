import { createContext, useContext} from 'react'
import Sidevar from '../components/Sidevar'

const DataContext = createContext()

export const DataProvider =({children}) => {
   const [form, setForm]=useState({
    restaurantID: "",
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: true,
    image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  }
  )

 const handleSubmit =(e)=>{
    e.preventDefault();
 
     localStorage.setItem(evalData, form)
    setForm([...fleet, form])

    setForm({
   restaurantID: "",
   restaurantName: "",
   address: "",
   type: "",
   parkingLot: "",
  }
    )
}
  
const  Formfunction =()=>{
    setForm()
}
  
    return (
        <DataContext.Provider value={{
            form,
            Formfunction,
            handleSubmit
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)