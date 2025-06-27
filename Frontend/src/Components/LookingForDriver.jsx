import React from 'react'
import {RiArrowDownWideLine,RiCurrencyFill,RiMapPinFill} from '@remixicon/react'
const LookingForDriver = (props) => {
  return (
    <div>
       <h5 className='p-1 text-center absolute top-0 w-[90%]' onClick={()=>{
                props.setVehicleFound(false)
               }}>< RiArrowDownWideLine/></h5>
               <h3 className='text-2xl font-semibold mb-3 px-3'>Looking for a Driver</h3>
               <div className='flex gap-5 justify-between flex-col items-center p-5'>
                <img className='h-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='w-full mt-5'>
                    <div  className='flex items-center gap-5 p-3 border-b-2'>
                        <h5 className='text-lg'><RiMapPinFill/></h5>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Ambedkar ward seoni madhya pradesh</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                         <h5 className='text-lg'><RiMapPinFill/></h5>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Ambedkar ward seoni madhya pradesh</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                         <h5 className='text-lg'><RiCurrencyFill/></h5>
                        <div>
                            <h3 className='text-lg font-medium '>Rs 193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
              
               </div>
    </div>
  )
}

export default LookingForDriver
