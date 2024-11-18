
'use client'
import React ,{useState,useEffect} from 'react'
import './comp.css'
import { Search } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
function TopBar() {

    const router = useRouter()
    const [query,setQuery] = useState('')
    const [userId, setUserId] = useState(null)
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const user = localStorage.getItem('User')
        if(!user){
            router.push('/Login')
        }
        if (user) {
            try {
                setUserId(JSON.parse(user)._id)
            } catch (error) {
                console.error('Error parsing User from localStorage:', error)
            }
        }
    }, [])

    const handleSearch=(e)=>{
        setQuery(e.target.value)
    }
    useEffect(() => {
        if (query.length>1) {
          const fetchCars = async () => {
            try {
              const res = await fetch(`/api/getSearch?query=${query}`);
              const data = await res.json();
              setCars(data.cars);
            } catch (error) {
              console.error('Error fetching search results:', error);
            }
          };
    
          fetchCars();
        }
        else{
            setCars([])
        }
      }, [query]);
      console.log(cars)

      const handleClick= (id)=>{
        router.push(`/car/${id}`)
        setCars([])
      }
  return (
    <div className='top-bar'>
        <h2 onClick={()=>router.push('/')}>CarVerse</h2>
        <div className='top-centr'>
            { cars.length>0 && <div className='search'>
                {cars && cars.map((item)=>(
                    <li  onClick={()=>handleClick(item._id)} key={item._id}> <p>{item.title} | {item.company} | {item.type}</p></li>
                ))}
            </div>}
            <input onInput={(e)=>handleSearch(e)} placeholder='Search cars...'/>
            <button><Search/></button>
        </div>
        <button onClick={()=>{userId ? router.push('/addCar'):router.push('/login')}}>{userId ? 'Add Car':'Login'}</button>
    </div>
  )
}

export default TopBar