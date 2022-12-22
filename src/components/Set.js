import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Set = ({ sdata }) => {
    return (
        <div className='flex flex-wrap justify-center gap-10 '>


{
    sdata.map((ele, k) => {
        return(
            
            <div className='flex'>
                                <Stack style={{ width: "28rem" }} className=''>
                                    <Skeleton variant="rectangular" animation='wave' width={'28rem'} height={200} className='rounded-lg' />
                                    <div className='flex justify-between '>
                                        <Skeleton variant="text" animation='wave' width={'13rem'} height={40} />
                                        <Skeleton variant="text" animation='wave' width={'5rem'} height={40} />
                                    </div>
                                    <div className='flex justify-between '>
                                        <Skeleton variant="text" animation='wave' width={'13rem'} height={40} />
                                        <Skeleton variant="text" animation='wave' width={'5rem'} height={40} />
                                    </div>
                                    <div className='flex justify-between '>
                                        <Skeleton variant="circular" animation='wave' width={30} height={30} />
                                        <Skeleton variant="text" animation='wave' width={'15rem'} height={40} />
                                        <Skeleton variant="text" animation='wave' width={'3rem'} height={40} />
                                    </div>

                                </Stack>
                            </div>
            
        )
    })
}








        </div>
    )
}

export default Set