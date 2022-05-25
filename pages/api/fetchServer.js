import { verify } from 'jsonwebtoken'
import axios from 'axios'
export default async function handler(req, res) {
    if(req.method === 'POST'){
        const secret = process.env.TOKEN_SECRET
        const { cookies } = req
        const { Token } = cookies
        const { body } = req
        try {
            const decodeToken = verify(Token,secret)
            const { account } = decodeToken
            try{
                await axios.get(`http://18.181.110.2:8001/MECH_OPERATION?Mechanical=${body.area}&Value=${body.videoStartorStop}&account=${account}`)
                res.status(200).json({message: 'success'})
            }
            catch(err){
                res.status(400).json({message: 'fail'})
            }  
        }
        catch(err){
            res.status(400).json({message: err.message})
        }
    }else{
        res.status(400).json({message: err.message})
    }
}
  