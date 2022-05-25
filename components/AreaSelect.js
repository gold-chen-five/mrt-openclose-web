import React from 'react'

function AreaSelect({setArea}) {
  return (
    <div className='w-3/5 h-4/5 flex flex-col justify-around items-center'>
        <h1 className='text-4xl font-bold text-[#F4D821]'>請選擇捷運站點</h1>
        <button className='text-4xl font-bold text-[#F4D821] h-[15%] w-1/4 border-[2px] rounded-lg border-[#F4D821]' onClick={() => setArea('R9')}>R9</button>
        <button className='text-4xl font-bold text-[#F4D821] h-[15%] w-1/4 border-[2px] rounded-lg border-[#F4D821]' onClick={() => setArea('R10')}>R10</button>
    </div> 
  )
}

export default AreaSelect