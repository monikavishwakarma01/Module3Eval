import React, { useEffect } from 'react'
import { useData} from '../context/Context'

function Adashboard() {
    const { updateform, deleteform, form,  } = useData()

    useEffect(()=>{
        updateform(item.id)
        deleteform(item.id)
    })

  return (
   <div>
    
         {feet.map((item)=>(
            <li key={item.id}>
                    <p>{form.image}</p>
                   <p>{item.restaurantID}</p>
                   <p>{item.restaurantName}</p>
                   <p>{item.address}</p>
                   <button onClick={(()=>updateform(item.id))}>Update</button>
                   <button onClick={(()=>deleteform(item.id))}>Delete</button>
            </li>
          ))}

   </div>
    
  )
}

export default Adashboard