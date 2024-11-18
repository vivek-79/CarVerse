'use client'
import { useRouter } from "next/navigation";
import React,{useState,useEffect} from "react";

export default function CarDetailPage() {
  const router = useRouter();
  const [car, setCar] = useState(null)

  useEffect(() => {
    if (router && router.query && router.query.carData) {
      setCar(JSON.parse(router.query.carData))
    }
  }, [router])

  if (!car) return <p>No data available</p>;

  return (
    <div>
      <h1>{car.title}</h1>
      <p>Company: {car.company}</p>
      <p>Dealer: {car.dealer}</p>
      <p>Type: {car.type}</p>
      <p>Description: {car.description}</p>
      <div>
        {car.images.map((img, index) => (
          <img key={index} src={img} alt={car.title} style={{ width: '200px' }} />
        ))}
      </div>
    </div>
  );
}