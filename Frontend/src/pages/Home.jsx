  import React,{useState,useRef} from 'react'
  import {useGSAP} from '@gsap/react' 
  import gsap from 'gsap'
  import { RiArrowDownWideLine } from '@remixicon/react';
  import VehiclePanel from '../Components/VehiclePanel';
  import LocationSearchPanel from '../Components/LocationSearchPanel';
  import ConfirmRide from '../Components/ConfirmRide';
import LookingForDriver from '../Components/LookingForDriver';
import WaitingForDriver from '../Components/WaitingForDriver'
  const Home = () => {
    const [pickupLocation, setPickupLocation] =useState('');
      const [dropLocation, setDropLocation] = useState('');
      const [panelOpen, setPanelOpen] = useState(false);  
     const vehiclePanelRef= useRef(null)
     const confirmRidePanelRef= useRef(null)
    const vehicleFoundRef =useRef(null);
  const panelCloseRef = useRef(null);
  const panelRef =useRef(null);
  const waitingDriverRef =useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
const [confirmRidePanel,setConfirmRidePanel]=useState(false) 
const [vehicleFound,setVehicleFound]=useState(false) 
const [waitingForDriver,setWaitingForDriver]=useState(false) 

    const submitHandler = (e) => {
    e.preventDefault();
  
    }
    useGSAP(function(){
      if(panelOpen){
        gsap.to(panelRef.current, {
          height: '70%',
          padding: 24
          //opacity: 1
        });
        gsap.to(panelCloseRef.current, {
           opacity:1,
        })
      }else{
        gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        })
         gsap.to(panelCloseRef.current, {
           opacity:0
        })
      }
    },[panelOpen]);
    
    useGSAP(function(){
     if(vehiclePanelOpen){
    gsap.to(vehiclePanelRef.current, {
      transform:'translateY(0)',
    })
  }
    else{
    gsap.to(vehiclePanelRef.current, {
      transform:'translateY(100%)',
    })
    } 
    },[vehiclePanelOpen]);

    useGSAP(function(){
     if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current, {
      transform:'translateY(0)',
    })
  }
    else{
    gsap.to(confirmRidePanelRef.current, {
      transform:'translateY(100%)',
    })
    } 
    },[confirmRidePanel]);

    useGSAP(function(){
     if(vehicleFound){
    gsap.to(vehicleFoundRef.current, {
      transform:'translateY(0)',
    })
  }
    else{
    gsap.to(vehicleFoundRef.current, {
      transform:'translateY(100%)',
    })
    } 
    },[vehicleFound]);

    useGSAP(function(){
     if(waitingForDriver){
    gsap.to(waitingDriverRef.current, {
      transform:'translateY(0)',
    })
  }
    else{
    gsap.to(waitingDriverRef.current, {
      transform:'translateY(100%)',
    })
    } 
    },[waitingForDriver]);

    return (
      <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute ml-5 mt-5' src="https://imgs.search.brave.com/dM7ayL6GDeUdg0B9CD0crlUFx0UiJNfkV76vRd3YMGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n" alt="" />
        <div
         className='h-screen w-screen'>
          <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/4xWOjHpZCXEXtf7B93KPmhDNtyc53HEWJS8El35sZxA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnViZXItY2RuLmNv/bS9jZG4tY2dpL2lt/YWdlL3dpZHRoPTIx/NjAscXVhbGl0eT04/MCxvbmVycm9yPXJl/ZGlyZWN0LGZvcm1h/dD1hdXRvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA4L0Nh/cmJvbl9NYXBzX0Zp/Z3VyZS0wNy5wbmc" alt="" />
        </div>
        <div className='h-screen flex flex-col justify-end absolute w-full top-0'>
          <div className='h-[30%] bg-white p-5 relative'>
            <h5 ref={panelCloseRef} onClick={()=>{
              setPanelOpen(false)
            }} className='absolute top-6 right-6 text-xl opacity-0'> <RiArrowDownWideLine/></h5>
            <h4 className='text-2xl font-semibold'>Find Trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[40%] left-10 bg-gray-700 rounded-full"></div>
            <input 
            
            onClick={() => {
                setPanelOpen(true) 
            }}

            className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full'

            value={pickupLocation}
            onChange={(e) =>{
            setPickupLocation(e.target.value)
            }}
            type="text" 
            placeholder='Add a pickup Location' />
            <input

            onClick={() => {
                setPanelOpen(true) 
            }}

            className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-2 w-full'
            value={dropLocation}
            onChange={(e) =>{
            setDropLocation(e.target.value)
            }}
            type="text" 
            placeholder='Add a drop Location' />
          </form>
          </div>
          <div ref={panelRef} className='bg-white h-0'>
                  <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
          </div>
        </div>
        <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white py-10 pt-12 flex flex-col items-center justify-center gap-3'>
           <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
        <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 pt-12 flex flex-col items-center justify-center gap-3'>
           <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
        </div>
         <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white py-6 pt-12 flex flex-col items-center justify-center gap-3'>
           <LookingForDriver setVehicleFound={setVehicleFound}/>
        </div>
        <div  ref={waitingDriverRef} className='fixed w-full z-10 bottom-0 bg-white py-6 pt-12 flex flex-col items-center justify-center gap-3'>
           <WaitingForDriver  waitingForDriver={waitingForDriver}/>
        </div>
      </div>
    )
  }

  export default Home
