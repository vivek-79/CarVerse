
'use client'
import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import '../root.css'
import { useRouter } from 'next/navigation'
import { BASE_API_URL } from '@/utils/constants'
export default function AddCarPage() {

    const {register,handleSubmit ,formState: { errors }} = useForm()
    const [photo, setPhoto] = useState([]);
    const [error,seterror] =useState('')
    const [loadind,setLoading] =useState(false)
    const router = useRouter()


    const [userId,setUserId] = useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const user = localStorage.getItem('User')
          if (user) {
            const parsedUser = JSON.parse(user)
            if (parsedUser._id) {
              setUserId(parsedUser._id)
            } else {
              router.push('/Login')
            }
          } else {
            router.push('/Login')
          }
        }
      }, [router])
    
      if (!userId) {
        return <p>Loading...</p>
      }
    const addImg = async (e)=>{
        setLoading(true)
        try {
            const pic=e.target.files[0]
            if(pic){
                const url = `https://api.cloudinary.com/v1_1/dqigib5my/image/upload`;
                const formData = new FormData();
                formData.append("file", pic);
                formData.append("upload_preset", "rxdfhyfi");
            
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        body: formData
                    });
            
                    if (response.ok) {
                        const res = await response.json();
                        console.log("Uploaded successfully");
                        setPhoto((prevPhotos) => [...prevPhotos, res?.secure_url])
                         console.log(photo)
                    } else {
                        console.error("Upload failed:", response.statusText);
                    }
                    setLoading(false)
               } catch (error) {
                   console.error("Error:", error.message);
                   setLoading(false)
                }
            }
        }
        catch(err){
            console.log(err)
            setLoading(false)
        }
    }

    const addCar = async(data)=>{
        data.photo =photo
        data.user=userId
        try {
            const res = await fetch(`${BASE_API_URL}/api/createProduct`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            const result = await res.json()
            console.log(result)
            if (!result.success) {
                seterror(result.message)
            }
            if (result.success){
                router.push('/')
            }
        } catch (error) {
            seterror(error.message)
        }
    }
  return (
    <div className='add-car'>
        <h2>Add Images</h2>
        {loadind && <p>uploading img...</p>}
        <div className='add-car-img'>
            <div className='each-img'>
                {photo?.[0]?<img src={photo[0]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[0] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(0, 1);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[1]?<img src={photo[1]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[1] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(1, 2);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[2]?<img src={photo[2]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[2] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(2, 3);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[3]?<img src={photo[3]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[3] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(3, 4);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[4]?<img src={photo[4]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[4] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(4,5);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[5]?<img src={photo[5]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[5] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(5,6);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[6]?<img src={photo[6]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[6] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(6,7);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[7]?<img src={photo[7]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[7] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(7,8);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[8]?<img src={photo[8]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[8] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(8,9);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
            <div className='each-img'>
                {photo?.[9]?<img src={photo[9]} alt='uploaded'/> :(<><label htmlFor='image'>+</label>
                <input id='image' onChange={(e)=>addImg(e)} type='file'/></>)}
                {photo?.[9] ? <p onClick={() =>
                    setPhoto((prevPhotos) => {
                        const updatedPhotos = [...prevPhotos];
                        updatedPhotos.splice(9,10);
                        return updatedPhotos;
                    })
                }>X</p>:''}
            </div>
           
        </div>
        <h2>Add Info</h2>
        <form onSubmit={handleSubmit(addCar)}>
            <div className='each-inpt'>
                <label htmlFor='title'>Title</label>
                <input 
                    type='text' placeholder='Enter title'
                    {...register('title', { required: 'Title is required' })}
                    />
            </div>
            <div className='each-inpt'>
                <label htmlFor='type'>Type</label>
                <select id='type' 
                 {...register('type', { required: 'Type is required' })}
                >
                    <option> Diesel</option>
                    <option> Petrol</option>
                    <option> Electric</option>
                </select>
            </div>
            <div className='each-inpt'>
                <label htmlFor='company'>Company</label>
                <input id='company'
                    type='text' placeholder='Company'
                    {...register('company', { required: 'Company is required' })}
                    />
            </div>
            <div className='each-inpt'>
                <label htmlFor='dealer'>Dealer</label>
                <input id='company'
                    type='text' placeholder='Dealer'
                    {...register('dealer', { required: 'Dealer is required' })}
                    />
            </div>
            <div className='each-inpt'>
                <label htmlFor='description'>Description</label>
                <textarea id='description'
                {...register('description')}
                />
            </div>
            {error&& <p>{error}</p>}
            <button>Add Car</button>
        </form>
    </div>
  )
}