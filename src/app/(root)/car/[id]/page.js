
'use client'
import React,{useState , useEffect} from 'react'
import styles from "./CarPage.module.css";
import { useRouter } from 'next/navigation';
import { BASE_API_URL } from '@/utils/constants';

function page({params}) {

    const router = useRouter()
    const [carData,setCarData] = useState({})
    const [id, setId] = useState('')
    const [error,setError] = useState('')
    useEffect(() => {
      const get = async () => {
        const data = await params
        setId(data.id)
      }
      get()
    }, [])

    useEffect(() => {
        console.log(id)
        const getProducts = async () => {
          const res = await fetch(`${BASE_API_URL}/api/eachProduct?id=${id}`)
          const result = await res.json()
          const data = result.res
          if (data) {
            setCarData(data)
        }
      }
      getProducts();
    }, [id])

    console.log(carData)

    const handleDelete = async(id)=>{
        try {
            const response = await fetch(`${BASE_API_URL}/api/deleteProduct?id=${id}`,{
                method:'DELETE'
            })
            const result = await response.json();
            if (result.success) {
                router.push('/')
              } else {
                setError(result.message)
              }
            } catch (error) {
              setError(error.message)
            }
    }
  return (
    <div className={styles.container}>
      <h1>{carData?.title}</h1>
      <p><strong>Type:</strong>{carData?.type}</p>
      <p><strong>Company:</strong> {carData?.company}</p>
      <p><strong>Dealer:</strong> {carData?.dealer}</p>
      <p><strong>Description:</strong> {carData?.description}</p>
      <p><strong>Created At:</strong> {new Date(carData?.createdAt).toLocaleString()}</p>
      <p><strong>Updated At:</strong> {new Date(carData?.updatedAt).toLocaleString()}</p>

      <div className={styles.button}> 
        <button onClick={()=>router.push(`/car/edit/${carData._id}`)}>Edit</button> 
        <button onClick={()=>handleDelete(carData?._id)}>Delete</button>
      </div>
      {error && <p>{error}</p>}
      <h2>Images</h2>
      <div className={styles.images}>
        {carData?.images?.length > 0 ? (
          carData?.images.map((img, index) => (
            <img key={index} src={img} alt={`Car Image ${index + 1}`} />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  )
}

export default page