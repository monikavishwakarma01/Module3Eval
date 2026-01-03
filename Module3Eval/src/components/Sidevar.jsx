import React from 'react'
import { useRef, useEffect} from 'react'

function Sidevar() {
    const nameRef = useRef()

    useEffect((useRef)=>{
      const useRef =()=>{
        nameRef.value.focus()
      }
    },[])
    
  return (
        <div>
        <form onSubmit={handleSubmit}>
     <input type="text" value={form.restaurantID} ref={nameRef}
     onChange={((e) => setForm([...form, e.target.value]))}/>

      <input type="text" value={form.restaurantName} 
      onChange={((e) => setForm([...form, e.target.value]))}/>

      <input type="text" value={form.address} 
      onChange={((e) => setForm([...form, e.target.value]))}/>

     <button type='submit'>ADD RASTURANT</button>
     </form>

    </div>
  )
}

export default Sidevar