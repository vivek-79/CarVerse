
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { BASE_API_URL } from '@/utils/constants'

function Card({ image, name, info ,id}) {

    const router = useRouter()
  return (
    <div  onClick={()=>router.push(`${BASE_API_URL}/car/${id}`)} className="card">
    <div className="card-image">
      <img src={image} alt={name} />
    </div>
    <div className="card-content">
      <h3>{name}</h3>
      <p>{info}</p>
    </div>
  </div>
  )
}

export default Card