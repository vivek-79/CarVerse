'use client'
import { useRouter } from "next/navigation";

function CarPage() {
  const router = useRouter();
  const { carData } = router.query;

  const car = carData ? JSON.parse(carData) : null;

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

export default CarPage;