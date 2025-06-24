import React,{ useEffect} from 'react'

const Home = () => {
   useEffect(() => {
      console.log("✅Home component mounted");
    }, []);
  return (
     <div style={{ color: 'black', fontSize: '24px', padding: '20px' }}>
      HOME PAGE
    </div>
  )
}

export default Home
