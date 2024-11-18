'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import './custm.css'
import '../../../root.css'
import { BASE_API_URL } from '@/utils/constants';
export default function EditPage({ params }) {

  const [images, setimages] = useState([])
  const [carData, setCarData] = useState({
    title: '',
    type: '',
    company: '',
    dealer: '',
    description: '',
    images: [],
    id:''
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const [id, setId] = useState('')
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
      const res = await fetch(`http://localhost:3000/api/eachProduct?id=${id}`)
      const result = await res.json()
      const data = result.res
      console.log(data)
      if (data) {
        setCarData({
          title: data.title || '',
          type: data.type || '',
          company: data.company || '',
          dealer: data.dealer || '',
          description: data.description || '',
          images: data.images || '',
          id:data._id || '',
        })
        setimages(data.images || '')
      }
    }
    getProducts();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const updatedData = {
      ...carData, images}
    try {
      const res = await fetch(`${BASE_API_URL}/api/updateProduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        alert('Car updated successfully');
        router.push(`/`);
      } else {
        alert('Failed to update car');
      }
    } catch (error) {
      console.error('Error updating car:', error);
    } finally {
      setLoading(false);
    }
  }
  const addImg = async (e) => {
    try {
      const pic = e.target.files[0]
      if (pic) {
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
            setimages((previmages) => [...previmages, res?.secure_url])
          } else {
            console.error("Upload failed:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (

    <div className="update-car-page">
      <div className='add-car-img'>
        <div className='each-img'>
          {images?.[0] ? <img src={images[0]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[0] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(0, 1);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[1] ? <img src={images[1]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[1] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(1, 2);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[2] ? <img src={images[2]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[2] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(2, 3);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[3] ? <img src={images[3]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[3] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(3, 4);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[4] ? <img src={images[4]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[4] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(4, 5);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[5] ? <img src={images[5]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[5] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(5, 6);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[6] ? <img src={images[6]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[6] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(6, 7);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[7] ? <img src={images[7]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[7] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(7, 8);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[8] ? <img src={images[8]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[8] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(8, 9);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>
        <div className='each-img'>
          {images?.[9] ? <img src={images[9]} alt='uploaded' /> : (<><label htmlFor='image'>+</label>
            <input id='image' onChange={(e) => addImg(e)} type='file' /></>)}
          {images?.[9] ? <p onClick={() =>
            setimages((previmagess) => {
              const updatedimagess = [...previmagess];
              updatedimagess.splice(9, 10);
              return updatedimagess;
            })
          }>X</p> : ''}
        </div>

      </div>
      <h2>Update Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={carData.title}
            onChange={(e) => setCarData({ ...carData, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            value={carData.company}
            onChange={(e) => setCarData({ ...carData, company: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dealer">Dealer</label>
          <input
            id="dealer"
            type="text"
            value={carData.dealer}
            onChange={(e) => setCarData({ ...carData, dealer: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={carData.description}
            onChange={(e) => setCarData({ ...carData, description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={carData.type}
            onChange={(e) => setCarData({ ...carData, type: e.target.value })}
          >
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Car'}
        </button>
      </form>
    </div>
  )
}

