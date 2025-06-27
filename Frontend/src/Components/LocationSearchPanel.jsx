import React from 'react'
import { RiMapPinFill } from '@remixicon/react'
function LocationSearchPanel(props) {
  console.log(props);
  
  {/* sample  array for location */}
  const locations = [
'34b , near gudgoan New Delhi',
  '24B , near vrindawan nagar,Bhopal',
  '12A , sector 5, Noida',
  '56C , near MG Road, Mumbai',
  '78D , sector 10, Gurugram',
]
  return (
    <div>
      {/*This is just sample data*/}
      {
        locations.map(function(elem,idx){
          return  <div key={idx} onClick={()=>{
            props.setVehiclePanelOpen(true);
            props.setPanelOpen(false);
          }} className='flex border-2 p-3 rounded-lg border-gray-200 active:border-black items-center justify-start gap-1 my-2'>
        <h2 className='bg-[#f3efef] h-10 w-10 flex items-center justify-center rounded-full text-xl'><RiMapPinFill/></h2>
        <h4 className='text-lg font-medium'>{elem}</h4>
      </div>
        })
      }
      {/*End of sample data*/}
    </div>
  )
}

export default LocationSearchPanel
