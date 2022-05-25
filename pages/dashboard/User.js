import React,{useEffect, useState} from 'react'
import { verify } from 'jsonwebtoken'
import AreaSelect from '../../components/AreaSelect'
import Videocontrol from '../../components/VideoControl'

function User() {
  const [area, setArea] = useState('')
  useEffect(() => {
    console.log(area)
  },[area])
  return (
    <main className='w-full h-screen flex justify-center items-center bg-[rgb(35,24,21)]'>
      <img src="/images/phalanity.gif" alt="" className='fixed top-0 right-0 w-24 h-24'/>
      {
        (area === '') && <AreaSelect setArea={setArea}/>
      }
      {
        (area === 'R9' || area === 'R10') && <Videocontrol area={area} setArea={setArea}/>
      }
    </main>
  )
}

export default User

export async function getServerSideProps({ req }) {
  const secret = process.env.TOKEN_SECRET
  const { cookies } = req
  const { Token } = cookies
  try{
    const decodeToken = verify(Token,secret)
    return {
      props:{
      }
    }
  }catch(err){
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/",
      },
    }
  }
  
}