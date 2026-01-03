import React, { useEffect } from 'react'
import { useData} from '../context/Context'
import Sidevar from '../components/Sidevar'

function Cdashboard() {
 const {form, Formfunction, handleSubmit,update} = useData()


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
                   <p>{form.image}</p>
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