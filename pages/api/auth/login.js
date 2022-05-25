import {sign} from 'jsonwebtoken'
import { serialize } from "cookie";

const secret = process.env.TOKEN_SECRET

export default async function handler(req, res) {
    const { method } = req
    const { body } = req
    
    switch(method){
        case 'POST':{    
            if(body.account === 'krt20001' && body.password === 'phalanity'){
                const user = {
                    account:body.account
                }
                
                const token = sign(user, secret)
                const serialised = serialize('Token', token, {
                    maxAge: 60 * 60 * 24 * 30,
                    httpOnly: true,
                    sameSite: "strict",
                    path: "/",
                    secure: false,//set cookie https or http
                })

                res.setHeader('Set-Cookie', serialised)
                res.status(200).json({
                    message: 'success'
                })
            }else if(body.account === 'phalanity' && body.password === 'Pp42817785'){
                const user = {
                    account:body.account
                }
                
                const token = sign(user, secret)
                const serialised = serialize('Token', token, {
                    maxAge: 60 * 60 * 24 * 30,
                    httpOnly: true,
                    sameSite: "strict",
                    path: "/",
                    secure: false,//set cookie https or http
                })

                res.setHeader('Set-Cookie', serialised)
                res.status(200).json({
                    message: 'success'
                })
            }else{
                res.status(400).json({message: 'fail'})
            }
            break            
        }
        default:{
            res.status(405).json({ nmessage: 'fail'})
            break
        }
    }
    
}
  