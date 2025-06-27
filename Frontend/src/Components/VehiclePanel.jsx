import React from 'react'
import {RiArrowDownWideLine,RiUser3Fill} from '@remixicon/react';
const VehiclePanel = (props) => {
  return (
    <div>
       <h5 className='p-1 text-center absolute top-0 w-[90%]' onClick={()=>{
                props.setVehiclePanelOpen(false)
               }}>< RiArrowDownWideLine/></h5>
                <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>
               <div className='flex items-center flex-col gap-2'>
                 <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                }} className='flex border-2 active:border-black rounded-xl w-full items-center justify-between'>
                  <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                  <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg flex items-center gap-1'>Moto <span><RiUser3Fill/></span>1</h4>
                    <h5 className='font-medium text-sm'>3 mins Away</h5>
                    <p className='font-normal text-xm text-gray-600'>Affordable ,MotorCycle rides</p>
                  </div>
                  <h2 className='text-xl font-semibold'>Rs 65.50</h2>
                </div>
                 <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                }} className='flex border-2  active:border-black rounded-xl w-full items-center justify-between'>
                  <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                  <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-lg flex items-center gap-1'>UberGo <span><RiUser3Fill/></span>4</h4>
                    <h5 className='font-medium text-sm'>2 mins Away</h5>
                    <p className='font-normal text-xm text-gray-600'>Affordable , compact rides</p>
                  </div>
                  <h2 className='text-xl font-semibold'>Rs 193.20</h2>
                </div>
                 <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                }} className='flex border-2  active:border-black rounded-xl w-full items-center justify-between'>
                  <img className='h-20' src="https://tse4.mm.bing.net/th?id=OIP.gERohywpalGF3NjolmHt5wHaE7&pid=Api&P=0&h=180" alt="" />
                  <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-lg flex items-center gap-1'>UberAuto <span><RiUser3Fill/></span>3</h4>
                    <h5 className='font-medium text-sm'> mins Away</h5>
                    <p className='font-normal text-xm text-gray-600'>Affordable ,Auto rides</p>
                  </div>
                  <h2 className='text-xl font-semibold'>Rs 118.20</h2>
                </div>
               </div>
    </div>
  )
}

export default VehiclePanel
