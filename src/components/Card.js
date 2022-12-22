import React from 'react'
// import Fooddata from './FoodData'

const Card = ({Fooddata}) => {
    return (
        <>
            < div className='flex flex-wrap gap-2 justify-between px-10'>
                {
                    Fooddata.map((value, index) => {
                        return (
                            <div className='w-[32%] p-2 rounded-xl hover:drop-shadow-xl bg-white shadow-lg'>
                                <img src={value.imgdata} className='w-full h-[320px] rounded-lg' alt='' />

                                <div className='flex gap-5 mt-3 justify-between items-center '>
                                    <h4 className='font-bold'>{value.rname}</h4>
                                    <span className='bg-green-600 w-[40px] text-white rounded'>{value.rating}★</span>
                                </div>
                                <div className='flex gap-3 justify-between items-center mb-3'>
                                    <h3> {value.address}</h3>
                                    <span>{value.price}</span>
                                </div>
                                <hr className='p-2 ' />
                                <div className='flex items-center justify-between'>
                                    <span className='w-[18px] '>
                                        <img src={value.arrimg}alt='' />
                                    </span>
                                    <span className='text-slate-500 '>

                                       {value.somedata}
                                    </span>
                                    <span>
                                        <img src={value.delimg} className='w-[70px] p-2' alt='' />

                                    </span>
                                </div>
                            </div>
                        )
                    })
                }




            </div>

        </>
    )
}

export default Card