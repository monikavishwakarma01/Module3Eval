import React from 'react'

function Adashboard() {
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
 
     localStorage.setItem(form)
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

  return (
   <div>
     <div>
        <form onSubmit={handleSubmit}>
     <input type="text" value={form.restaurantID} 
     onChange={((e) => setForm([...form, e.target.value]))}/>

      <input type="text" value={form.restaurantName} 
      onChange={((e) => setForm([...form, e.target.value]))}/>

      <input type="text" value={form.address} 
      onChange={((e) => setForm([...form, e.target.value]))}/>

     <button type='submit'>ADD RASTURANT</button>
     </form>
   </div>


        <div>
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

export default Adashboard