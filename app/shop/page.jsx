import React from 'react'
import Map from "../components/map/Map"
import Information from "../components/imformation/Imformation"
import './style.css'

const page = () => {
  return (
    <div className='box'>
     <Information/>
     <Map/>
    </div>
  )
}

export default page