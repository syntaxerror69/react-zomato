import React, { useEffect, useState } from 'react'
import Card from './Card'
import Fooddata from './FoodData'
import Set from './Set'

const Search = () => {
    const [fdata, setFdata] = useState(Fooddata)
    //console.log(fdata)
    const[copydata, setCopydata] = useState([]);
    //console.log(copydata)
    const changeData = (e) =>{
      let getchangedata = e.toLowerCase();

      if (getchangedata === '')
      {
        setCopydata(fdata)
      }
      else{
        let storeData = copydata.filter((ele, k) =>{
            return ele.rname.toLowerCase().match(getchangedata);
        });
        setCopydata(storeData)
      }
    }

    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

    useEffect(()=>{
        setTimeout(() => {
            setCopydata(Fooddata)   
        }, 3000);
        
    },[])
    return (
        <div>
            <div className=' py-4 flex justify-between items-center px-12'>
                <img src={zomatologo} className='w-[100px] h-[25px] cursor-pointer ' alt='' />
                <h2 className='text-3xl cursor-pointer'>Search Filter App </h2>
            </div>
            <div className='justify-center flex gap-2'>
                <input type='text' placeholder='search food'onChange={(e) => changeData(e.target.value)} size={60} className='border p-2 rounded text-light'></input>
                <button className='bg-red-500 text-white p-2 rounded w-[100px] '>Search</button>
            </div>
            <div>
                <h1 className='text-4xl justify-start items-start px-12 py-4'>Restaurent in Mumbai Open Now</h1>
            </div>
            <div>
               {copydata && copydata.length ?  <Card Fooddata={copydata}/> : <Set sdata={fdata}/>}
            </div>
            
        </div>
        
    )
}

export default Search