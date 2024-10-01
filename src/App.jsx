
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Cartitem } from './cartitem/Cartitem'


function App() {

  const [carts, setCart] = useState([])
  const [search, setSearch]= useState('')


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => setCart(data.meals));
  }, [search])


  const handleEvent =(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }


  return (
    <>

      <h1>Khabo khabo </h1>
      <h3>Let's search your Favorit</h3>
      <h3>Fooood</h3>
      <div>
        <h1>
          item : {carts.length}
        </h1>

        <div className='food'>
          
            <input type="text" name="text" id="text" required placeholder='Search your item' onChange={(e)=>handleEvent(e)}/>
            
          
        </div>
        <div className='grid grid-cols-4'>


          {
            carts.map((item) => <Cartitem item={item}></Cartitem>)
          }
        </div>

      </div>

    </>
  )
}

export default App
