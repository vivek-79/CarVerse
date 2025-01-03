'use client'
import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'
import './root.css'
import { BASE_API_URL } from '@/utils/constants'
import { useRouter } from 'next/navigation'
export default function HomePage() {

  const [cars,setCars] = useState([])
  const router = useRouter()


  useEffect(()=>{

    let userId=''
    if(!BASE_API_URL){
      return null;
    }
    const user = localStorage.getItem('User')
    if(!user){
      router.push('/Login')
    }
    if(user){
      userId =JSON.parse(user)._id
    }

    const getProducts= async()=>{
      const res = await fetch(`${BASE_API_URL}/api/listProduct?userId=${userId}`)
      const result= await res.json()
      setCars(result.cars)
    }
    getProducts();
  },[router])
  return (
    <div className='home'>
      {cars && cars.map((item)=>(
        <Card  id ={item._id} key = {item._id} image={item.images?.[0]} name={item.title.toUpperCase()} info={item.company}/>
      ))}
    </div>
  )
}