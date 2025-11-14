import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { removeUser } from '../utils/userSlice'
import { removeUserFeed } from '../utils/feedSlice'

const UserCard = ({user}) => {
    const {_id,firstName, lastName , photoUrl,age,gender , about}=user

    const dispatch=useDispatch()

    const handleSendReq=async(status,userId)=>{
      const res = await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true});
        dispatch(removeUserFeed(userId))
    }


  return (
    <div className='mb-20'>
      <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt={firstName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    {age && gender && <p>{age + ", "+ gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4 ">
        <button className="btn btn-primary" onClick={()=>handleSendReq("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendReq("interested",_id)}>Intrested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
