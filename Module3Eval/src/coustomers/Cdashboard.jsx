import React, { useEffect } from 'react'
import { useData} from '../context/Context'
import Sidevar from '../components/Sidevar'

function Cdashboard() {
 const {form, Formfunction, handleSubmit} = useData()


useEffect(()=>{
    Formfunction()
    handleSubmit()
})

  


  return (

    <div>

        <div>
             <Sidevar/>
        </div>


        <div >
         {feet.map((item)=>(
            <li key={item.id}>
                   <p>{item.restaurantID}</p>
                   <p>{item.restaurantName}</p>
                   <p>{item.address}</p>
            </li>
          ))}

        </div>
    </div>
  )
}

export default Cdashboard