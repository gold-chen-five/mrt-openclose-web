import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
function VideoControl({area,setArea}) {
  const clickFlag = useRef(false)
  const [videoStartorStop, setVideoStartorStop] = useState('')

  const btnOnclick = (status) => {
    alert('按確定並開始，請勿重複點擊')
    setVideoStartorStop(status)
    clickFlag.current = true
  }
  const fetchApi = () => {
    axios.post(`http://18.181.110.2:7000/api/fetchServer`,{
        area: area,
        videoStartorStop: videoStartorStop
    })
      .then(res => res.data)
      .then(data => {
        console.log(data)
      })

  }

  useEffect(() => {
    if(clickFlag.current){
        fetchApi()
    }
  },[videoStartorStop])

  return (
    <div className='w-3/5 h-4/5 flex flex-col justify-around items-center'>
        <h1 className='text-4xl font-bold text-[#F4D821]'>{area}</h1>
        <button className='text-4xl font-bold text-[#72C2DB] h-[15%] w-[23%] border-[2px] rounded-lg border-[#72C2DB]' onClick={() => btnOnclick('start')}>開始</button>
        <button className='text-4xl font-bold text-[#DB817D] h-[15%] w-[23%] border-[2px] rounded-lg border-[#DB817D]' onClick={() => btnOnclick('stop')}>停止</button>
        <button className='text-2xl font-bold text-[#F4D821] h-[8%] w-[18%] border-[2px] rounded-lg border-[#F4D821]' onClick={() => setArea('')}>返回</button>
    </div>
  )
}

export default VideoControl