import React, { useContext, useEffect, useState } from 'react';
import ContentDetails from '../ContentDetails/ContentDetails.js';
import { AuthContext } from '../../AuthProvider/AuthProvider.js';

const ContentList = () => {
    const [userData, setUserData]=useState([]);
    const {loading, user} = useContext(AuthContext)
    const url = 'http://localhost:5000/volunteer';
    useEffect(()=>{
       
        fetch('http://localhost:5000/volunteer')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setUserData(data);
        })
    },[]);

    const handleDelete =id=>{
        console.log(id);
        const agree = window.confirm("Are u sure to delete?")
        if (agree) {
        fetch(`http://localhost:5000/volunteer/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
           
                if (data.deletedCount > 0) {
                     
                    const remainingEvents= userData.filter(data=> data._id !== id)
                    setUserData(remainingEvents)
                }
            })
        }
      }
    
    
    return (
        <div className='mt-4'>
            <h2 className='text-blue-500 font-medium'> NO Of event : <span className='text-emerald-500 font-extrabold text-2xl'>{userData?.length}</span></h2>
            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-4 mb-16 max-h-20 ">
            {
                userData?.map(photos=> <ContentDetails
                key={photos._id}
                photos={photos}
                handleDelete={handleDelete}
                ></ContentDetails>)
            }
            
            </div>
        </div>
    );
};

export default ContentList;